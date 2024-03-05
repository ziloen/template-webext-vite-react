import { preset } from '@ziloen/tailwind-config'
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  presets: [preset],
  theme: {
    extend: {},
  },
} satisfies Config
