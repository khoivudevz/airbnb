import { createSlice } from "@reduxjs/toolkit";
import { localStorageServices } from "../services/localStorageServices";

const initialState = {
  userInfor: localStorageServices.getUserInfor(),
  token: localStorageServices.getToken(),
  avatar: localStorageServices.getAVATAR(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.userInfor = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    removeUserInfor: (state) => {
      state.userInfor = null;
    },
    removeAvatar: (state) => {
      state.avatar = null;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});
export const {
  setUserInfor,
  removeUserInfor,
  removeAvatar,
  setAvatar,
  setToken,
  removeToken,
} = userSlice.actions;
export default userSlice.reducer;
