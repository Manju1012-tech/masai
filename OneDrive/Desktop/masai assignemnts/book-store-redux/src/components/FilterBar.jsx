import React from "react";
import {
  Box,
  Input,
  Select,
  Button,
  Stack,
} from "@chakra-ui/react";

const genres = ["", "Programming", "Fiction", "Science", "Biography"];

export default function FilterBar({
  author,
  genre,
  readStatus,
  setAuthor,
  setGenre,
  setReadStatus,
  clearFilters,
}) {
  return (
    <Box mb={6}>
      <Stack direction={["column", "row"]} spacing={4} align="center">
        <Input
          placeholder="Filter by Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          size="sm"
        />
        <Select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          size="sm"
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g === "" ? "All Genres" : g}
            </option>
          ))}
        </Select>
        <Select
          value={readStatus}
          onChange={(e) => setReadStatus(e.target.value)}
          size="sm"
        >
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </Select>
        <Button size="sm" onClick={clearFilters}>
          Clear Filters
        </Button>
      </Stack>
    </Box>
  );
}
