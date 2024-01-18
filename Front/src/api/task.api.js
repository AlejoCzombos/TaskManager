import axios from "axios";
import { GetToken, GetUserId } from "../service/loginService";

const taskApi = axios.create({
  baseURL: "http//localhost:8081/api/tasks",
  headers: { Authorization: `bearer ${GetToken()}` },
});

export const getAllTask = (userId) => taskApi.get(`/${userId}`);

export const getTaskById = (taskId) => taskApi.get(`/${taskId}`);

export const createTask = (task) =>
  taskApi.post(`?userId=${GetUserId()}`, task);

export const updateTask = (task) => taskApi.put(`?userId=${GetUserId()}`, task);

export const deleteTask = (taskId) => taskApi.delete(`/${taskId}`);
