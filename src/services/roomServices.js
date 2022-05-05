import axios from "axios";
import { url, token, tokenByClass } from "../constants/configUrl";

export const roomServices = {
  createRoom() {
    return axios({
      url: `${url}/api/rooms`,
      method: "POST",
      headers: {
        token,
        tokenByClass,
      },
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
  updateDetailsRoom(_idRoom) {
    return axios({
      url: `${url}/api/rooms/${_idRoom}`,
      method: "PUT",
      headers: {
        tokenByClass,
        token,
      },
    });
  },
  deleteRoom(_idRoom) {
    return axios({
      url: `${url}/api/rooms/${_idRoom}`,
      method: "DELETE",
      headers: {
        tokenByClass,
        token,
      },
    });
  },
  bookingRoom() {
    return axios({
      url: `${url}/api/rooms/booking`,
      method: "POST",
      headers: {
        tokenByClass,
        token,
      },
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
