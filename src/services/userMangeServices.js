import axios from "axios";
import { url, token, tokenByClass } from "../constants/configUrl";

export const userManageServices = {
  createUser(data) {
    return axios({
      url: `${url}/api/users`,
      method: "POST",
      headers: {
        token,
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
      url: `${url}/api/users/pagination?skip=0&limit=3`,
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
        token,
        tokenByClass,
      },
    });
  },
  updateUser(_idUser) {
    return axios({
      url: `${url}/api/users/${_idUser}`,
      method: "PUT",
      headers: {
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
