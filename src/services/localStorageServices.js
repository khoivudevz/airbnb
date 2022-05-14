const USER_INFOR = "USER_INFOR";
const ADMIN_INFOR = "ADMIN_INFOR";
const TOKEN = "TOKEN";
const ADMIN_TOKEN = "ADMIN_TOKEN";
const AVATAR = "AVATAR";
const ADMIN_AVATAR = "ADMIN_AVATAR";

export const localStorageServices = {
  setUserInfor: (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(USER_INFOR, json);
  },
  setAVATAR: (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(AVATAR, json);
  },
  setAdminAVATAR: (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(ADMIN_AVATAR, json);
  },
  setAdminInfor: (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(ADMIN_INFOR, json);
  },
  setToken: (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(TOKEN, json);
  },
  setAdminToken: (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(ADMIN_TOKEN, json);
  },

  getUserInfor: () => {
    if (localStorage.getItem(USER_INFOR)) {
      let json = localStorage.getItem(USER_INFOR);

      return JSON.parse(json);
    } else {
      return null;
    }
  },
  getAVATAR: () => {
    if (localStorage.getItem(AVATAR)) {
      let json = localStorage.getItem(AVATAR);

      return JSON.parse(json);
    } else {
      return null;
    }
  },
  getAdminAVATAR: () => {
    if (localStorage.getItem(ADMIN_AVATAR)) {
      let json = localStorage.getItem(ADMIN_AVATAR);

      return JSON.parse(json);
    } else {
      return null;
    }
  },
  getAdminInfor: () => {
    if (localStorage.getItem(ADMIN_INFOR)) {
      let json = localStorage.getItem(ADMIN_INFOR);

      return JSON.parse(json);
    } else {
      return null;
    }
  },
  getToken: () => {
    if (localStorage.getItem(TOKEN)) {
      let json = localStorage.getItem(TOKEN);

      return JSON.parse(json);
    } else {
      return null;
    }
  },
  getAdminToken: () => {
    if (localStorage.getItem(ADMIN_TOKEN)) {
      let json = localStorage.getItem(ADMIN_TOKEN);

      return JSON.parse(json);
    } else {
      return null;
    }
  },

  removeUserInfor: () => {
    localStorage.removeItem(USER_INFOR);
  },
  removeAVATAR: () => {
    localStorage.removeItem(AVATAR);
  },
  removeToken: () => {
    localStorage.removeItem(TOKEN);
  },
  removeAminToken: () => {
    localStorage.removeItem(ADMIN_TOKEN);
  },
  removeAdminInfor: () => {
    localStorage.removeItem(ADMIN_INFOR);
  },
};
