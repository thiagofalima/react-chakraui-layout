import { describe, expect, it, vi } from "vitest";
import { login } from "./login";

describe('login', () => {

    const mockAlert = vi.fn();
    window.alert = mockAlert
    const mockEmail = 'thiago@senai.com'

    it('Deve exibir um alert com boas vindas', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem-vindo ${mockEmail}!`)
    })

    it('Não deve dar apenas boas vindas', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(`Bem-vindo`)
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido')
    })

})