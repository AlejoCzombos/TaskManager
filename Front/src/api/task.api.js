import { GetToken, GetUserId } from "../service/loginService";

const BASEURL = "http://localhost:8081/api/tasks";

export const getAllTasks = () => {
  const url = `${BASEURL}?userId=${GetUserId()}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};

export const getCompletedTasks = () => {
  const url = `${BASEURL}/finished?userId=${GetUserId()}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};

export const getIncompletedTasks = () => {
  const url = `${BASEURL}/unfinished?userId=${GetUserId()}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};

export const getImportantTasks = () => {
  const url = `${BASEURL}/important?userId=${GetUserId()}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};

export const getTaskById = (taskId) => {
  const url = `${BASEURL}/${taskId}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};

export const createTask = (task) => {
  const url = `${BASEURL}?userId=${GetUserId()}`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};

export const updateTask = (task) => {
  const url = `${BASEURL}?userId=${GetUserId()}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};

export const updateTaskCompleted = (taskId) => {
  const url = `${BASEURL}/${taskId}`;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};

export const deleteTask = (taskId) => {
  const url = `${BASEURL}/${taskId}`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetToken()}`,
    },
  });
};
