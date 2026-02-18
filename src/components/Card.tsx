import { Avatar, Card, Text } from "@chakra-ui/react"

interface IMyCard {
    name: string | undefined,
    balance: number | undefined
}

const MyCard = ( {name, balance}: IMyCard ) => {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2">Bem-vindo {name}</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
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
