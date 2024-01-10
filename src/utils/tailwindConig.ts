import type { TW_THEME } from '~cwd/vite.config'

// @ts-expect-error Vite define variable
export const tailwindTheme = TAILWIND_THEME as TW_THEME
