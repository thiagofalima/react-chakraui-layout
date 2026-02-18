import { Box, Center } from "@chakra-ui/react"
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
    <Header />
      <Box
        m="100px auto"
        maxW="sm"
        bg="bg"
        shadow="md"
        p="10"
        borderRadius="md"
      >
        <Center>
          {children}
        </Center>
      </Box>
    </>
  )
}

export default Layout;