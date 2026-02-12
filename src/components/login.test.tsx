import { describe, expect, it, vi } from "vitest";
import { login } from "./login";

describe('login', () => {

    const mockAlert = vi.fn();
    window.alert = mockAlert
    const mockEmail = 'thiago.lima@senai.com'

    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem-vindo ${mockEmail}!`)
    })

    it('Não deve dar apenas boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem-vindo`)
    })

})