import { api } from "@/api"
import { Box } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import MyCard from "@/components/Card"
import { AppContext } from "@/components/AppContext"
import { useNavigate } from "react-router-dom"

interface UserData {
  email: string,
  password: string,
  name: string,
  balance: number
}

export const AccountPage = () => {

  const [userData, setUserData] = useState<null | UserData>()
  const navigate = useNavigate()

  const { isLoggedIn } = useContext( AppContext )

  !isLoggedIn && navigate('/')

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
