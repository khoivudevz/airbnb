import axios from "axios";
import { url, token, tokenByClass } from "../constants/configUrl";

export const userServices = {
  signUp() {
    return axios({
      url: `${url}/api/auth/register`,
      method: "POST",
      headers: {
        tokenByClass,
      },
    });
  },
  logIn() {
    return axios({
      url: `${url}/api/auth/login`,
      method: "POST",
      headers: {
        tokenByClass,
      },
    });
  },
};
