import axios from "axios";
import { url, token, tokenByClass } from "../constants/configUrl";

export const restoreServices = {
  restore() {
    return axios({
      url: `${url}/restore`,
      method: "POST",
    });
  },
};
