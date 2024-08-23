import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
  toggleForm: false,
  user: {},
  error: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setFormData: (state, { payload }) => {
      state.formData = payload;
    },
    toggleAuthForm: (state) => {
      state.toggleForm = !state.toggleForm;
    },
    setErrorMessage: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setFormData, setUser, setErrorMessage, toggleAuthForm } =
  globalSlice.actions;

export default globalSlice.reducer;
