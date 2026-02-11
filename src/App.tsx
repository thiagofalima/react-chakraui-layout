import { Form } from "./components/Form";
import { Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box 
      m="100px auto" 
      maxW="sm" 
      bg="bg" 
      shadow="md" 
      p="10"
      borderRadius="md"
      >
        <Center>
          <Form />
        </Center>
      </Box>
    </>
  );
}

export default App;
