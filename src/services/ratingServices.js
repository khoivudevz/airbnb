import axios from "axios";
import { url, token, tokenByClass } from "../constants/configUrl";

export const ratingServices = {
  createRating(_idRoom) {
    return axios({
      url: `${url}/api/reviews?roomId=${_idRoom}`,
      method: "POST",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
  getRateInRoom(_idRoom) {
    return axios({
      url: `${url}/api/reviews/byRoom?roomId=${_idRoom}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  deleteRating(_idRate) {
    return axios({
      url: `${url}/api/reviews/${_idRate}`,
      method: "DELETE",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
  getDetailsRating(_idRate) {
    return axios({
      url: `${url}/api/reviews/${_idRate}`,
      method: "DELETE",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
  updateInformaitonRating(_idRate) {
    return axios({
      url: `${url}/api/reviews/${_idRate}`,
      method: "PUT",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
};
