import { RootState } from "../shared/RootReducer";

export const selectPosts = (state: RootState) => state.blogReducer.posts;
export const selectTime = (state: RootState) => state.blogReducer.time;
