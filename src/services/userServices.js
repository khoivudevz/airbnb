import axios from "axios";
import { url, token, tokenByClass } from "../constants/configUrl";

export const userServices = {
  signUp(data) {
    return axios({
      url: `${url}/api/auth/register`,
      method: "POST",
      data: data,
      headers: {
        tokenByClass,
      },
    });
  },
  logIn(data) {
    return axios({
      url: `${url}/api/auth/login`,
      method: "POST",
      data: data,
      headers: {
        tokenByClass,
      },
    });
  },
};
