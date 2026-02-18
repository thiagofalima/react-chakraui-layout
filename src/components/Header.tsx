import { Box, Center, Text} from "@chakra-ui/react";

const Header = () => {
    return (
        <Box width="100%" padding="1em" backgroundColor="#16a349">
            <Center>
                <Text fontSize="xl" fontWeight={500} letterSpacing={2} color="white">Dio Bank</Text>
            </Center>
        </Box>
    )
}

export default Header;