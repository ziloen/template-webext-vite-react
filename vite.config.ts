import resolveConfig from 'tailwindcss/resolveConfig'
import { defineConfig } from 'vite'
import tailwindConfig from './tailwind.config.ts'

const twConfig = resolveConfig(tailwindConfig)

export type TW_THEME = typeof twConfig.theme


// eslint-disable-next-line no-restricted-exports
export default defineConfig(({ command, mode }) => {
  return {

  }
})