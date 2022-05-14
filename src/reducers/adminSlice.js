import { createSlice } from "@reduxjs/toolkit";
import { localStorageServices } from "../services/localStorageServices";

const initialState = {
  adminInfor: localStorageServices.getAdminInfor(),
  adminToken: localStorageServices.getAdminToken(),
  adminAvatar: localStorageServices.getAdminAVATAR(),
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    setAdminInfor: (state, action) => {
      state.adminInfor = action.payload;
    },
    setAdminAvatar: (state, action) => {
      state.adminAvatar = action.payload;
    },
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
    removeAdminInfor: (state) => {
      state.adminInfor = null;
    },
    removeAdminToken: (state) => {
      state.adminToken = null;
    },
    removeAdminAvatar: (state) => {
      state.adminAvatar = null;
    },
  },
});
export const {
  setAdminInfor,
  setAdminAvatar,
  removeAdminInfor,
  setAdminToken,
  removeAdminToken,
  removeAdminAvatar,
} = adminSlice.actions;
export default adminSlice.reducer;
