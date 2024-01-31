import { SaveUser } from "../service/loginService";

const BASEURL = "http://localhost:8081/api/auth";

export const AuthLogin = (body) => {
  const url = `${BASEURL}/login`;

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const AuthRegister = (body) => {
  const url = `${BASEURL}/register`;

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
