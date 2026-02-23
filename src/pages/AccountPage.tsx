import { api } from "@/api"
import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import MyCard from "@/components/Card"

interface UserData {
  email: string,
  password: string,
  name: string,
  balance: number
}

export const AccountPage = () => {

  const [userData, setUserData] = useState<null | UserData>()

  useEffect(() => {
    // Criação de uma função async
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    // chamando a função logo após a sua criação
    getData()

  })

  return (

    <Box>
      <MyCard
        name={userData?.name}
        balance={userData?.balance}
      />
    </Box>

  )
}
