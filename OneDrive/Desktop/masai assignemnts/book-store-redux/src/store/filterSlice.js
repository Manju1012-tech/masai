import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: "",
  genre: "",
  readStatus: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAuthor(state, action) {
      state.author = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setReadStatus(state, action) {
      state.readStatus = action.payload;
    },
    clearFilters(state) {
      state.author = "";
      state.genre = "";
      state.readStatus = "all";
    },
  },
});

export const { setAuthor, setGenre, setReadStatus, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
