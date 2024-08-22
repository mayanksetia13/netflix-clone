import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFormData: (state, { payload }) => {
      state.formData = payload;
    },
  },
});

export const { setFormData } = globalSlice.actions;

export default globalSlice.reducer;
