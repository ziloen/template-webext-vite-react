import resolveConfig from 'tailwindcss/resolveConfig'
import AutoImport from 'unplugin-auto-import/vite'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import tailwindConfig from './tailwind.config.ts'

const twConfig = resolveConfig(tailwindConfig)

export type TW_THEME = typeof twConfig.theme

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      AutoImport({
        dts: 'src/types/auto-imports.d.ts',
      }) as Plugin,
    ],
  }
})
