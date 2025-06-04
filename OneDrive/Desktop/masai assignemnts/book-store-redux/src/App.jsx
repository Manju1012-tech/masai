import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Heading, Container } from "@chakra-ui/react";

import {
  addBook,
  deleteBook,
  editBook,
  toggleRead,
} from "./store/booksSlice";

import {
  setAuthor,
  setGenre,
  setReadStatus,
  clearFilters,
} from "./store/filterSlice";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import FilterBar from "./components/FilterBar";

export default function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);

  const [nextId, setNextId] = useState(2);

  const filteredBooks = books.filter((book) => {
    const matchesAuthor =
      filter.author === "" ||
      book.author.toLowerCase().includes(filter.author.toLowerCase());
    const matchesGenre = filter.genre === "" || book.genre === filter.genre;
    const matchesReadStatus =
      filter.readStatus === "all" ||
      (filter.readStatus === "read" && book.read) ||
      (filter.readStatus === "unread" && !book.read);

    return matchesAuthor && matchesGenre && matchesReadStatus;
  });

  const handleAddBook = (data) => {
    dispatch(
      addBook({
        id: nextId,
        ...data,
        read: false,
      })
    );
    setNextId(nextId + 1);
  };

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEditBook = (updatedBook) => {
    dispatch(editBook(updatedBook));
  };

  const handleToggleRead = (id) => {
    dispatch(toggleRead(id));
  };

  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={6} textAlign="center">
        Book Store Redux
      </Heading>

      <BookForm onSubmit={handleAddBook} />

      <FilterBar
        author={filter.author}
        genre={filter.genre}
        readStatus={filter.readStatus}
        setAuthor={(author) => dispatch(setAuthor(author))}
        setGenre={(genre) => dispatch(setGenre(genre))}
        setReadStatus={(status) => dispatch(setReadStatus(status))}
        clearFilters={() => dispatch(clearFilters())}
      />

      <Box>
        <BookList
          books={filteredBooks}
          onDelete={handleDeleteBook}
          onToggleRead={handleToggleRead}
          onEdit={handleEditBook}
        />
      </Box>
    </Container>
  );
}
