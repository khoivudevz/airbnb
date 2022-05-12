import { createSlice } from "@reduxjs/toolkit";
import { localStorageServices } from "../services/localStorageServices";

const initialState = {
  adminInfor: localStorageServices.getAdminInfor(),
  adminAvatar: null,
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
    removeAdminInfor: (state) => {
      state.adminInfor = null;
    },
  },
});
export const {
  setAdminInfor,
  setAdminAvatar,
  removeAdminInfor,
  setAdminToken,
  removeAdminToken,
} = adminSlice.actions;
export default adminSlice.reducer;
