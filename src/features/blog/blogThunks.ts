import { Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../shared/RootReducer";
import { getPosts } from "./blogService";
import { setPosts, setTime } from "./blogSlice";
import moment from "moment";

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const blogThunk = (): AppThunk => async (dispatch: any) => {
  try {
    const response = await getPosts();
    await dispatch(setPosts(response));
    await dispatch(setTime(moment()));

    return response;
  } catch (e) {
    console.error(e);
  }
};
