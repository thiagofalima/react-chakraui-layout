import {
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"

import { login } from "./login"
import { useState, useEffect } from "react"
import { MyButton } from "./MyButton"




export const Form = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <Fieldset.Root size="lg" maxW="md" colorPalette="green">
      <Stack>
        <Fieldset.HelperText>
          Informe seu usuário e senha:
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>

        <Field.Root>
          <Field.Label>Email </Field.Label>
          <Input
            value={email}
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
