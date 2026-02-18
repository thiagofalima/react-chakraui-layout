import { Avatar, Card, Text } from "@chakra-ui/react"

interface IMyCard {
    name: string | undefined,
    balance: number | undefined
}

const currentDate = new Date()
const MyCard = ( {name, balance}: IMyCard ) => {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Card.Title mt="2">Bem-vindo {name}</Card.Title>
        <Card.Description>
          Date: {`${currentDate.getUTCDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Text fontSize="1.5em" fontWeight={500}>Saldo</Text>
        <Text fontSize="1.5em">{ balance }</Text>
      </Card.Footer>
    </Card.Root>
  )
}

export default MyCard;
