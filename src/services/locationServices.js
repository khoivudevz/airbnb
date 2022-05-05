import axios from "axios";
import { url, token, tokenByClass } from "../constants/configUrl";

export const locationServices = {
  createLocation() {
    return axios({
      url: `${url}/api/locations`,
      method: "POST",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
  deleteLocation(_idLocation) {
    return axios({
      url: `${url}/api/locations/${_idLocation}`,
      method: "DELETE",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
  getLocationList() {
    return axios({
      url: `${url}/api/locations`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  getDetailsLocation(_idLocation) {
    return axios({
      url: `${url}/api/locations/${_idLocation}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  updateInformationLocation(_idLocaton) {
    return axios({
      url: `${url}/api/locations/${_idLocaton}`,
      method: "PUT",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
  updatePhotoLocation(_idLocation) {
    return axios({
      url: `${url}/api/locations/upload-images/${_idLocation}`,
      method: "POST",
      headers: {
        token,
        tokenByClass,
      },
    });
  },
  getLocationListWithRate(rate) {
    return axios({
      url: `${url}/api/locations/by-valueate?valueate=${rate}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
};
