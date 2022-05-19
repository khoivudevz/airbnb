import axios from "axios";
import { url, tokenByClass } from "../constants/configUrl";
import { localStorageServices } from "./localStorageServices";

export const locationServices = {
  createLocation() {
    return axios({
      url: `${url}/api/locations`,
      method: "POST",
      headers: {
        token: localStorageServices.getToken(),
        tokenByClass,
      },
    });
  },
  deleteLocation(_idLocation) {
    return axios({
      url: `${url}/api/locations/${_idLocation}`,
      method: "DELETE",
      headers: {
        token: localStorageServices.getToken(),
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
  updateInformationLocation(_idLocaton, data) {
    return axios({
      url: `${url}/api/locations/${_idLocaton}`,
      method: "PUT",
      headers: {
        token: localStorageServices.getToken(),
        tokenByClass,
      },
      data,
    });
  },
  updatePhotoLocation(_idLocation) {
    return axios({
      url: `${url}/api/locations/upload-images/${_idLocation}`,
      method: "POST",
      headers: {
        token: localStorageServices.getToken(),
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
