import type { PresetTheme } from '@ziloen/tailwind-config'
import { defineConfig, preset } from '@ziloen/tailwind-config'

export default defineConfig({
  content: ['./src/**/*.{ts,tsx,html}'],
  presets: [preset],
  theme: {} as PresetTheme,
})
