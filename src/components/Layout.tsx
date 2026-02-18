import { Box, Center } from "@chakra-ui/react"

const Layout = ({ children }: any) => {
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
          { children }
        </Center>
      </Box>
        </>
    )
}

export default Layout;