import {
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"

import { login } from "./login"
import { useState, useEffect } from "react"
import { MyButton } from "./MyButton"
import { api } from "@/api"

interface UserData{
  email: string,
  password: string,
  name: string
} 

export const Form = () => {

  const [ email, setEmail ] = useState<string>('')
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

  console.log(userData)

  return (
    <Fieldset.Root size="lg" maxW="md" colorPalette="green">
      <Stack>
        <Fieldset.Legend>Bem-vindo(a) { userData?.name }!</Fieldset.Legend>
        <Fieldset.HelperText>
          Informe seu usuário e senha:
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>

        <Field.Root>
          <Field.Label>Email </Field.Label>
          <Input 
          value={ email }
          onChange={(event) => setEmail(event.target.value)}
          name="email" type="email" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Senha </Field.Label>
          <Input name="password" type="password" />
        </Field.Root>

      </Fieldset.Content>

      <MyButton 
        onClick={() => login(email)}
      >
      </MyButton> 
    </Fieldset.Root>
  )
}
