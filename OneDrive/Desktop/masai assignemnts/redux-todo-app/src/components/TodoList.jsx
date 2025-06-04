import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_TODO, DELETE_TODO } from "../redux/actiontypes";
import { Box, Checkbox, IconButton, Stack, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <Stack spacing={3}>
      {todos.map(todo => (
        <Box
          key={todo.id}
          p={3}
          borderWidth="1px"
          borderRadius="md"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox
            isChecked={todo.status}
            onChange={() => dispatch({ type: TOGGLE_TODO, payload: todo.id })}
          >
            <Text as={todo.status ? "del" : ""}>{todo.title}</Text>
          </Checkbox>
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => dispatch({ type: DELETE_TODO, payload: todo.id })}
          />
        </Box>
      ))}
    </Stack>
  );
}
