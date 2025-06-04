import { useDispatch } from "react-redux";
import { ADD_TODO } from "../redux/actiontypes";
import { Input, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() === "") 
        return;

    const newTodo = {
      title,
      status: false,
      id: uuid()
    };

    dispatch({ type: ADD_TODO, payload: newTodo });
    setTitle("");
  };

  return (
    <HStack mb={4}>
      <Input
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleAdd} colorScheme="teal">Add</Button>
    </HStack>
  );
}
