import { Box, Heading, VStack } from "@chakra-ui/react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Box maxW="md" mx="auto" mt={10}>
      <VStack spacing={5}>
        <Heading>Redux Todo App</Heading>
        <TodoInput />
        <TodoList />
      </VStack>
    </Box>
  );
}

export default App;


