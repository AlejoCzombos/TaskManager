import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthLogin } from "../api/auth.api";
import { useLogin } from "../Context/login";
import { SaveUser } from "../service/loginService";
import toast from "react-hot-toast";

export function LoginPage() {
  const { setIsLogin, isOpenLogin, setIsOpenLogin, setIsOpenRegister } =
    useLogin();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onClose = () => {
    setIsOpenLogin(false);
  };

  const onSubmit = handleSubmit(async (value) => {
    const response = AuthLogin(value);

    toast.promise(response, {
      loading: "Cargando...\nDisculpe la demora, hosting gratuito 😅",
      success: <b>Sesión iniciada!</b>,
      error: <b>Error al iniciar sesión 😓</b>,
    });

    try {
      const res = await response;
      const data = await res.json();

      if (data && data.token) {
        setIsLogin(true);
        SaveUser(data.token);
        setIsOpenLogin(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  });

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center z-30
        transition-colors ${isOpenLogin ? "visible bg-black/50" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-700 rounded-xl shadow p-5 transition-all m-5
      ${isOpenLogin ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <PlusIcon
          onClick={onClose}
          className="
          absolute md:top-3 md:right-3 top-6 right-6
        fill-zinc-500
          flex justify-end
          rounded-full
          transition hover:scale-125
          md:size-6 size-9 rotate-45
          cursor-pointer
          "
        />

        <h1 className="text-center text-white font-bold md:text-3xl text-4xl mb-4 mt-2">
          Iniciar Sesión
        </h1>

        <form className="max-w-md w-screen mx-auto" onSubmit={onSubmit}>
          <div className="mb-3">
            <label
              htmlFor="usernameLogin"
              className="block mb-2 md:text-sm text-xl font-medium text-white"
            >
              Correo electrónico:
            </label>
            <input
              autoFocus={isOpenLogin ? true : false}
              type="username"
              id="usernameLogin"
              className=" border-2 md:text-sm text-xl rounded-xl block w-full p-2.5 bg-zinc-600 border-zinc-500 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90 focus:outline-none"
              placeholder="ejemplo@gmail.com"
              {...register("username", {
                required: "El email es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                  message: "Email invalido",
                },
                maxLength: {
                  value: 50,
                  message: "El email puede tener un máximo de 50 caracteres",
                },
                minLength: {
                  value: 5,
                  message: "El email tiene que tener mínimo 5 caracteres",
                },
              })}
            />
            {errors.username && (
              <span className="md:text-sm text-xl text-red-400">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="passwordLogin"
              className="block mb-2 md:text-sm text-xl font-medium text-white"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="passwordLogin"
              className=" border-2 md:text-sm text-xl rounded-xl block w-full p-2.5 bg-zinc-600 border-zinc-500 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90 focus:outline-none"
              placeholder="********"
              {...register("password", {
                required: "La contraseña es requerida",
                maxLength: {
                  value: 255,
                  message:
                    "La contraseña puede tener un máximo de 255 caracteres",
                },
              })}
            />
            {errors.password && (
              <span className="md:text-sm text-xl text-red-400">
                {errors.password.message}
              </span>
            )}
          </div>
          <p className="text-white mb-4 text-center md:text-base text-xl">
            ¿No tienes una cuenta?{" "}
            <a
              href="#"
              className="text-green-400/90 hover:text-white"
              onClick={() => {
                setIsOpenLogin(false);
                setIsOpenRegister(true);
              }}
            >
              Regístrate aquí
            </a>
          </p>

          <button className="w-full md:text-base text-2xl bg-green-500/90 text-white font-semibold hover:bg-green-400/90 p-2 px-3.5 rounded-xl">
            Iniciar sesión
          </button>
          <button
            className="w-full mt-4 md:text-base text-2xl bg-green-700/90 text-white font-semibold hover:bg-green-600/90 p-2 px-3.5 rounded-xl"
            onClick={() => {
              setValue("username", "test@test.com");
              setValue("password", "testpassword");
            }}
          >
            Prueba / Test
          </button>
        </form>
      </div>
    </div>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
    >
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    </svg>
  );
}
