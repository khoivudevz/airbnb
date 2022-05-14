import axios from "axios";
import { url, tokenByClass } from "../constants/configUrl";
import { localStorageServices } from "./localStorageServices";

export const roomServices = {
  createRoom(data) {
    return axios({
      url: `${url}/api/rooms`,
      method: "POST",
      headers: {
        token: localStorageServices.getAdminToken(),
        tokenByClass,
      },
      data,
    });
  },
  getRoomList() {
    return axios({
      url: `${url}/api/rooms`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  getRoomListInLocation(_idLocation) {
    return axios({
      url: `${url}/api/rooms?locationId=${_idLocation}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  getDetailsRoom(_idRoom) {
    return axios({
      url: `${url}/api/rooms/${_idRoom}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  updateDetailsRoom(_idRoom, data) {
    return axios({
      url: `${url}/api/rooms/${_idRoom}`,
      method: "PUT",
      headers: {
        tokenByClass,
        token: localStorageServices.getAdminToken(),
      },
      data,
    });
  },
  deleteRoom(_idRoom) {
    return axios({
      url: `${url}/api/rooms/${_idRoom}`,
      method: "DELETE",
      headers: {
        tokenByClass,
        token: localStorageServices.getAdminToken(),
      },
    });
  },
  bookingRoom(data) {
    return axios({
      url: `${url}/api/rooms/booking`,
      method: "POST",
      headers: {
        tokenByClass,
        token: localStorageServices.getAdminToken(),
      },
      data,
    });
  },
  updatePhotosRoom(_idRoom) {
    return axios({
      url: `${url}/api/rooms/upload-image/${_idRoom}`,
      method: "POST",
      headers: {
        tokenByClass,
        token: localStorageServices.getAdminToken(),
      },
    });
  },
};
