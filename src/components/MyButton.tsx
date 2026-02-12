import { Button } from "@chakra-ui/react";
import type { MouseEventHandler } from "react";

interface MyButtonProps{
    onClick: MouseEventHandler
}

export const MyButton = ( { onClick }: MyButtonProps ) => {

    return (
    <Button
    width="100%" type="submit" alignSelf="flex-start"
    onClick={ onClick }
    >
    Submit
    </Button>
    )
}