import axios from "axios";
import { BASE_URL, LOGIN_URL, LOGIN_INFO_URL } from "../utils/constants.js";

async function logIn(userName, password) {
  return await axios({
    baseURL: BASE_URL,
    url: LOGIN_URL,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      login: userName,
      password: password,
    },
  })
    .then((response) => {
      localStorage.setItem("TOKEN", response.data.accessToken);
      localStorage.setItem("EXPIRE", response.data.expire);
      return response.data.accessToken;
    })
    .catch((e) => {
      console.log("Authorization error", e);
    });
}

async function accountInfo(token) {
  if (token) {
    return await axios({
      baseURL: BASE_URL,
      url: LOGIN_INFO_URL,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.data.eventFiltersInfo;
      })
      .catch((e) => console.log("Receiving data error", e));
  } else {
    console.log("You are not authorized");
  }
}

export { logIn, accountInfo };