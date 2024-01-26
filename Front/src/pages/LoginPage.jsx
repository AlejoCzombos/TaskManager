import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthLogin } from "../api/auth.api";
import { useContext } from "react";
import { LoginContext } from "../Context/login";
import { SaveUser } from "../service/loginService";
import toast from "react-hot-toast";

export function LoginPage() {
  const { setIsLogin, isOpenLogin, setIsOpenLogin } = useContext(LoginContext);
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
    const res = await AuthLogin(value);
    const data = await res.json();

    toast.promise(Promise.resolve(data), {
      loading: "Cargando...",
      success: <b>Sesión iniciada!</b>,
      error: <b>Error al iniciar sesión 😓</b>,
    });

    if (data && data.token) {
      setIsLogin(true);
      SaveUser(data.token);
      setIsOpenLogin(false);
    }
    navigate("/");
  });

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center
        transition-colors ${isOpenLogin ? "visible bg-black/50" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-800 rounded-xl shadow p-5 transition-all
      ${isOpenLogin ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <PlusIcon
          onClick={onClose}
          className="
        fill-zinc-500
          flex justify-end
          rounded-full
          transition hover:scale-125
          size-6 rotate-45"
        />

        <h1 className="text-center text-white font-bold text-3xl mb-4">
          Iniciar Sesión
        </h1>

        <form className="max-w-md w-screen mx-auto" onSubmit={onSubmit}>
          <div className="mb-5">
            <label
              htmlFor="usernameLogin"
              className="block mb-2 text-sm font-medium text-white"
            >
              Correo electrónico:
            </label>
            <input
              type="username"
              id="usernameLogin"
              className=" border-2 text-sm rounded-xl block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90"
              placeholder="ejemplo@gmail.com"
              {...register("username", {
                required: "El email es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                  message: "Email invalido",
                },
                maxLength: {
                  value: 50,
                  message: "El email puede tener un maximo de 50 caracteres",
                },
                minLength: {
                  value: 5,
                  message: "El email tiene que tener mínimo 5 caracteres",
                },
              })}
            />
            {errors.username && (
              <span className="text-sm text-red-400">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="passwordLogin"
              className="block mb-2 text-sm font-medium text-white"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="passwordLogin"
              className=" border-2 text-sm rounded-xl block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-green-500/90 focus:border-green-500/90"
              placeholder="********"
              {...register("password", {
                required: "La contraseña es requerida",
                maxLength: {
                  value: 255,
                  message:
                    "La contraseña puede tener un maximo de 255 caracteres",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-400">
                {errors.password.message}
              </span>
            )}
          </div>
          <p className="text-white mb-3 text-center">
            ¿No tienes una cuenta?{" "}
            <a href="#" className="text-green-400/90 hover:text-white">
              Regístrate aquí
            </a>
          </p>

          <button className="w-full bg-green-500/90 text-white font-semibold hover:bg-green-400/90 p-2 px-3.5 rounded-xl">
            Iniciar sesión
          </button>
          <button
            className="w-full mt-4 bg-green-700/90 text-white font-semibold hover:bg-green-600/90 p-2 px-3.5 rounded-xl"
            onClick={() => {
              //setValue("username", "test@test.com");
              //setValue("password", "testpassword");
              setValue("username", "alejoczombos@gmail.com");
              setValue("password", "hola");
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
