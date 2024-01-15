import { createContext, useState } from "react"
import {IsLogin} from '../service/loginService'

export const LoginContext = createContext()

export function LoginProvider({children}) {

    const [isLogin, setIsLogin] = useState(() =>{
        return IsLogin()
    })

    const [isOpenLogin, setIsOpenLogin] = useState(false)

  return (
    <LoginContext.Provider value={{
        isLogin,
        setIsLogin,
        isOpenLogin,
        setIsOpenLogin
    }}>
        {children}
    </LoginContext.Provider>
  )
}