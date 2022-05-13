import { createSlice } from "@reduxjs/toolkit";
import { localStorageServices } from "../services/localStorageServices";

const initialState = {
  userInfor: localStorageServices.getUserInfor(),
  avatar: localStorageServices.getAVATAR(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.userInfor = action.payload;
    },
    removeUserInfor: (state) => {
      state.userInfor = null;
    },
  },
});
export const { setUserInfor, removeUserInfor, setToken, removeToken } =
  userSlice.actions;
export default userSlice.reducer;
