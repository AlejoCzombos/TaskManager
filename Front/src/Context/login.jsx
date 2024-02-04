import { createContext, useContext, useState } from "react";
import { CheckIsLogin } from "../service/loginService";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(() => {
    return CheckIsLogin();
  });

  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        isLogin,
        setIsLogin,
        isOpenLogin,
        setIsOpenLogin,
        isOpenRegister,
        setIsOpenRegister,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => {
  const context = useContext(LoginContext);

  if (context == undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }

  return context;
};
