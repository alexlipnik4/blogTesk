import { RootState } from "../shared/RootReducer";

export const selectLanguage = (state: RootState) =>
  state.generalReducer.language;
export const selectActiveModal = (state: RootState) =>
  state.generalReducer.activeModal;
