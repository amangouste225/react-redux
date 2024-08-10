import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      //
    },
    removeMovie: (state, action) => {
      //
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
