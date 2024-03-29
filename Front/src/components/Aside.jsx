import { useLogin } from "../Context/login";
import { DeleteUser } from "../service/loginService";

import { toast } from "react-hot-toast";
import { Navbar } from "./Navbar";
import { SideMenuItem } from "./SideMenuItem";
import { Profile } from "./Profile";
import { useNavigate } from "react-router-dom";

export function Aside() {
  const { isLogin, setIsLogin, setIsOpenLogin } = useLogin();

  const navigate = useNavigate();

  const handleClickLogin = async () => {
    setIsOpenLogin(isLogin ? false : true);
    if (isLogin) {
      await DeleteUser();
      setIsLogin(false);
      toast.success("Sesión cerrada");
      await navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <Profile />

      <Navbar />

      <SideMenuItem
        text={isLogin ? "Cerrar Sesión" : "Iniciar Sesión"}
        onClick={handleClickLogin}
      >
        {isLogin ? (
          <OutIcon className="size-8" />
        ) : (
          <InIcon className="size-8" />
        )}
      </SideMenuItem>
    </div>
  );
}

function OutIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
    </svg>
  );
}

function InIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </svg>
  );
}
