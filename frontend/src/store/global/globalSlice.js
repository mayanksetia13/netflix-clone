import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  formData: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState: INITIAL_STATE,
  reducers: {
    setFormData: (state, { payload }) => {
      state.formData = payload;
    },
  },
});

export const { setFormData } = globalSlice.actions;

export default globalSlice.reducer;
