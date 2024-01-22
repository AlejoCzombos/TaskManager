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

/*export const AuthLogin = async (data, setIsLogin) => {
  const res = await authApi.post("/login", data);
  setIsLogin(true);
  SaveUser(res.data.token);
};*/

export const AuthRegister = (body) => {
  const url = `${BASEURL}/register`;

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      SaveUser(data.token);
    })
    .catch((error) => {
      console.error("Error during registration:", error);
      // Handle the error appropriately, e.g., show an error message to the user
    });
};
