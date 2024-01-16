import axios from 'axios'
import {SaveUser} from '../service/loginService'

const authApi = axios.create({
    baseURL: "http://localhost:8081/api/auth"
})

export const AuthLogin = async (data, setIsLogin) => { 
    const res = await authApi.post("/login", data)
    setIsLogin(true)
    SaveUser(res.data.token)
}

export const AuthRegister = async (data) => {
    const res = await authApi.post("/register", data)
    SaveUser(res.data.token)
}