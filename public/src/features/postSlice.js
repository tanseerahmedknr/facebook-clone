import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  // Blank array inital state
  initialState: {
    value: [],
  },
  // Reducers are different action/events that you will perform, like add post, save post..
  reducers: {
    addPost: (state, action) => {
      // updating the state after getting from dispatch from createPost
      // unshift will add the data at the starting of array
      state.value.unshift(action.payload);
    },
    // [...] is destructing the array
    addAllPost: (state, action) => {
      state.value.push(...action.payload);
    },
  },
});

// Exporting actions
export const { addPost, addAllPost } = postSlice.actions;
// Exporting state, post & value are from above createSlice
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
