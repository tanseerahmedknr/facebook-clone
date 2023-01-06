import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";

// reducer are the slices
export default configureStore({
  reducer: {
    post: postReducer,
  },
});
