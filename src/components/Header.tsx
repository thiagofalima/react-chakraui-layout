import { Box, Center, Text} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "@/App";

const Header = () => {

    const context = useContext(AppContext)

    return (
        <Box width="100%" padding="1em" backgroundColor="#16a349">
            <Center>
                <Text fontSize="xl" fontWeight={500} letterSpacing={2} color="white">Dio Bank</Text>
            </Center>
        </Box>
    )
}

export default Header;