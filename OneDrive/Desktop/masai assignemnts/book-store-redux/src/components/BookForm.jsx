import React, { useState, useEffect } from "react";
import { Box, Button, Input, Select, Stack } from "@chakra-ui/react";

const genres = ["Programming", "Fiction", "Science", "Biography"];

export default function BookForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState(genres[0]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setGenre(initialData.genre);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Please fill title and author");
    onSubmit({ title, author, genre });
    setTitle("");
    setAuthor("");
    setGenre(genres[0]);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" mb={6}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </Select>
          <Stack direction="row" spacing={4}>
            <Button colorScheme="blue" type="submit">
              {initialData ? "Update Book" : "Add Book"}
            </Button>
            {initialData && (
              <Button onClick={onCancel} colorScheme="gray">
                Cancel
              </Button>
            )}
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
