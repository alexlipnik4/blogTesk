import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./blogModels";

const initialState: InitialState = {
  posts: [],
  time: null,
};
export const branchSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    updatePosts: (state, action) => {
      let _posts = [...state.posts];
      let counter = 0;
      _posts.forEach((post, index) => {
        if (index >= action.payload.fromId && index <= action.payload.toId) {
          post.body = action.payload.data[counter].translations[0].text;
          post.title = action.payload.data[counter + 1].translations[0].text;
          post.username = action.payload.data[counter + 2].translations[0].text;
          counter += 1;
        }
      });
      state.posts = _posts;
    },
    updatePostLikes: (state, action) => {
      let _posts = [...state.posts];
      let post = _posts.find((post) => post.id === action.payload);
      if (post) {
        if (!post.likes) {
          post.likes = 1;
        } else {
          post.likes += 1;
        }
        state.posts = _posts;
      }
    },
  },
});

export const { setPosts, setTime, updatePostLikes, updatePosts } =
  branchSlice.actions;
export default branchSlice.reducer;
