import type { Config } from 'tailwindcss'
import type { PluginAPI } from 'tailwindcss/types/config'

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  presets: [],
  theme: {
    colors: {
      // Default colors
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
    },

    lineHeight: {
      none: '1',
    },

    zIndex: {
      auto: 'auto',
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      max: '2147483647',
    },

    extend: {},
  },
  experimental: {
    // Remove unused global css variables, e.g. --tw-translate-x: 0;
    optimizeUniversalDefaults: true,
    // matchVariant: true,
  },
  // https://tailwindcss.com/docs/theme#configuration-reference
  corePlugins: {},
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        // Flex utilities
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
        '.flex-justify': {
          display: 'flex',
          'justify-content': 'center',
        },
        '.flex-align': {
          display: 'flex',
          'align-items': 'center',
        },
        '.flex-column': {
          display: 'flex',
          'flex-direction': 'column',
        },

        // Scrollbar utilities
        '.scrollbar-none': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
      })
    },
  ],
} satisfies Config
