import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"


export const Form = () => {
  return (
    <Fieldset.Root size="lg" maxW="md" colorPalette="green">
      <Stack>
        <Fieldset.Legend>Bem-vindo(a)!</Fieldset.Legend>
        <Fieldset.HelperText>
          Informe seu usuário e senha:
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>

        <Field.Root>
          <Field.Label>Email </Field.Label>
          <Input name="email" type="email" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Senha </Field.Label>
          <Input name="password" type="password" />
        </Field.Root>

      </Fieldset.Content>

      <Button width="100%" type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
  )
}
