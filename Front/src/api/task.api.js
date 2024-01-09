import axios from 'axios'

const taskApi = axios.create({
    baseURL: "http//localhost:8081/api/tasks"
})

export const getAllTask = (userId) => taskApi.get(`/${userId}`)

export const createTask = (task) => taskApi.post("", task)

export const updateTask = (task) => taskApi.put("", task)

export const deleteTask = (taskId) => taskApi.delete(`/${taskId}`)