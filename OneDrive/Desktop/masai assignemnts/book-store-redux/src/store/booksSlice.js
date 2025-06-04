import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "React for Beginners",
    author: "John Doe",
    genre: "Programming",
    read: false,
  },
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },
    deleteBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
    editBook(state, action) {
      const { id, title, author, genre } = action.payload;
      const book = state.find((book) => book.id === id);
      if (book) {
        book.title = title;
        book.author = author;
        book.genre = genre;
      }
    },
    toggleRead(state, action) {
      const book = state.find((book) => book.id === action.payload);
      if (book) {
        book.read = !book.read;
      }
    },
  },
});

export const { addBook, deleteBook, editBook, toggleRead } = booksSlice.actions;

export default booksSlice.reducer;
