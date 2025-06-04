import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Badge,
  HStack,
  VStack,
} from "@chakra-ui/react";

import BookForm from "./BookForm";

export default function BookList({
  books,
  onDelete,
  onToggleRead,
  onEdit,
}) {
  const [editingBook, setEditingBook] = useState(null);

  const startEdit = (book) => {
    setEditingBook(book);
  };

  const cancelEdit = () => {
    setEditingBook(null);
  };

  const handleUpdate = (data) => {
    onEdit({ ...editingBook, ...data });
    setEditingBook(null);
  };

  if (editingBook) {
    return <BookForm initialData={editingBook} onSubmit={handleUpdate} onCancel={cancelEdit} />;
  }

  return (
    <Stack spacing={4}>
      {books.length === 0 && <Text>No books found.</Text>}

      {books.map((book) => (
        <Box
          key={book.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          bg={book.read ? "green.50" : "red.50"}
        >
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold" fontSize="lg">
              {book.title}
            </Text>
            <Text>Author: {book.author}</Text>
            <Text>Genre: {book.genre}</Text>
            <Badge colorScheme={book.read ? "green" : "red"}>
              {book.read ? "Read" : "Unread"}
            </Badge>
          </VStack>
          <HStack mt={3} spacing={2}>
            <Button size="sm" colorScheme="blue" onClick={() => startEdit(book)}>
              Edit
            </Button>
            <Button size="sm" colorScheme="red" onClick={() => onDelete(book.id)}>
              Delete
            </Button>
            <Button size="sm" onClick={() => onToggleRead(book.id)}>
              Mark as {book.read ? "Unread" : "Read"}
            </Button>
          </HStack>
        </Box>
      ))}
    </Stack>
  );
}
