import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./generalModels";

const initialState: InitialState = {
  activeModal: null,
  language: "en",
};
export const branchSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setActiveModal: (state, action) => {
      state.activeModal = action.payload;
    },
  },
});

export const { setLanguage, setActiveModal } = branchSlice.actions;
export default branchSlice.reducer;
