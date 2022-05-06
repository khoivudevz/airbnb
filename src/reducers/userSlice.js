import { createSlice } from "@reduxjs/toolkit";
import { localStorageServices } from "../services/localStorageServices";

const initialState = {
  userInfor: localStorageServices.getUserInfor(),
  avatar: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.userInfor = action.payload;
    },
    setUserAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    removeUserInfor: (state) => {
      state.userInfor = null;
    },
  },
});
export const { setUserInfor, setUserAvatar } = userSlice.actions;
export default userSlice.reducer;
