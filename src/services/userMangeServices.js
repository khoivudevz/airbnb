import axios from "axios";
import { url, tokenByClass } from "../constants/configUrl";
import { localStorageServices } from "./localStorageServices";

export const userManageServices = {
  createUser(data) {
    return axios({
      url: `${url}/api/users`,
      method: "POST",
      headers: {
        token: localStorageServices.getAdminToken(),
        tokenByClass,
      },
      data,
    });
  },
  getDetailsUser(_idUser) {
    return axios({
      url: `${url}/api/users/${_idUser}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  getUserList() {
    return axios({
      url: `${url}/api/users/pagination`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  deleteUser(_idUser) {
    return axios({
      url: `${url}/api/users/${_idUser}`,
      method: "DELETE",
      headers: {
        token: localStorageServices.getAdminToken(),
        tokenByClass,
      },
    });
  },
  updateUser(_idUser, data) {
    return axios({
      url: `${url}/api/users/${_idUser}`,
      method: "PUT",
      headers: {
        token: localStorageServices.getAdminToken(),
        tokenByClass,
      },
      data,
    });
  },
};
