import { describe, expect, it, vi } from "vitest";
import { login } from "./login";

describe ('login', () => {

    const mockAlert = vi.fn();
    window.alert = mockAlert
    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledTimes(1)
    })
})