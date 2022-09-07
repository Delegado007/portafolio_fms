import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  openMenu: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    }
  },
});

export const { setLoading, setOpenMenu } = uiSlice.actions;

export default uiSlice.reducer;