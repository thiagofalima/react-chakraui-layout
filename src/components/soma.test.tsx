import { soma } from './soma'
import { describe, expect, it } from "vitest"

describe('soma', () => {
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })
})