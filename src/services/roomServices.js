import axios from "axios";
import { url, token, tokenByClass, ADMIN_TOKEN } from "../constants/configUrl";

export const roomServices = {
  createRoom(data) {
    return axios({
      url: `${url}/api/rooms`,
      method: "POST",
      headers: {
        token: ADMIN_TOKEN,
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
        token: ADMIN_TOKEN,
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
        token: ADMIN_TOKEN,
      },
    });
  },
  bookingRoom(data) {
    return axios({
      url: `${url}/api/rooms/booking`,
      method: "POST",
      headers: {
        tokenByClass,
        token,
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
        token,
      },
    });
  },
};
