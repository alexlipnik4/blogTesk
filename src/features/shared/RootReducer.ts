import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "../blog/blogSlice";
import generalReducer from "../general/generalSlice";

const RootReducer = combineReducers({ blogReducer, generalReducer });

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
