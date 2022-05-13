import axios from "axios";
import { url, token, tokenByClass, ADMIN_TOKEN } from "../constants/configUrl";

export const userManageServices = {
  createUser(data) {
    return axios({
      url: `${url}/api/users`,
      method: "POST",
      headers: {
        token: ADMIN_TOKEN,
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
        token: ADMIN_TOKEN,
        tokenByClass,
      },
    });
  },
  updateUser(_idUser, data) {
    return axios({
      url: `${url}/api/users/${_idUser}`,
      method: "PUT",
      headers: {
        token: ADMIN_TOKEN,
        tokenByClass,
      },
      data,
    });
  },
  updateAvatarUser() {
    return axios({
      url: `${url}/api/users/upload-avatar/`,
      method: "POST",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
};
