import axios from "axios";
import { url, token, tokenByClass } from "../constants/configUrl";

export const userManageServices = {
  createUser() {
    return axios({
      url: `${url}/api/users`,
      method: "POST",
      header: {
        token,
        tokenByClass,
      },
    });
  },
  getDetailsUser(_idUser) {
    return axios({
      url: `${url}/api/users/${_idUser}`,
      method: "GET",
      header: {
        tokenByClass,
      },
    });
  },
  getUserList() {
    return axios({
      url: `${url}/api/users/pagination?skip=0&limit=3`,
      method: "GET",
      header: {
        tokenByClass,
      },
    });
  },
  deleteUser(_idUser) {
    return axios({
      url: `${url}/api/users/${_idUser}`,
      method: "DELETE",
      header: {
        token,
        tokenByClass,
      },
    });
  },
  updateUser(_idUser) {
    return axios({
      url: `${url}/api/users/${_idUser}`,
      method: "PUT",
      header: {
        token,
        tokenByClass,
      },
    });
  },
  updateAvatarUser(_idUser) {
    return axios({
      url: `${url}/api/users/upload-avatar/${_idUser}`,
      method: "POST",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
};
