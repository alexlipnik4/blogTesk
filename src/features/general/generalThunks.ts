import { Action, ThunkAction } from "@reduxjs/toolkit";
import { updatePosts } from "../blog/blogSlice";
import { RootState } from "../shared/RootReducer";
import { IGetTranslation, ModalTypes } from "./generalModels";
import { getTranslations } from "./generalService";
import { setActiveModal } from "./generalSlice";

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const languageThunk =
  (value: IGetTranslation, fromId: number, toId: number): AppThunk =>
  async (dispatch: any) => {
    if (value) {
      try {
        console.log(value, fromId, toId);
        const response = await getTranslations(value);
        console.log(response, "fdsfsd");
        dispatch(updatePosts({ data: response, fromId, toId }));
        return response;
      } catch (e) {
        dispatch(setActiveModal(ModalTypes.error));
        console.error(e);
      }
    }
  };
