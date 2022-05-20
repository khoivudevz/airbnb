import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  count: 0,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
      state.count++;
    },
    removeLoading: (state, action) => {
      state.count--;
      state.count == 0 ? (state.loading = false) : (state.loading = true);
    },
  },
});
export const { setLoading, removeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
