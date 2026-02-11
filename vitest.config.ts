import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.{test,}.{ts,js,jsx,tsx}'],
    environment: "jsdom"
}
})
