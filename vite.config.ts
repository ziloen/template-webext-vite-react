import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { resolve as r } from 'node:path'
import { cwd } from 'node:process'
import PostcssPresetEnv from 'postcss-preset-env'
import tailwind from 'tailwindcss'
import resolveConfig from 'tailwindcss/resolveConfig'
import AutoImport from 'unplugin-auto-import/vite'
import SvgComponent from 'unplugin-svg-component/vite'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import { manifest } from './src/manifest'
import tailwindConfig from './tailwind.config'

const twConfig = resolveConfig(tailwindConfig)

export type TW_THEME = typeof twConfig.theme

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'

  return {
    experimental: {
      skipSsrTransform: true,
    },
    server: {
      port: 3303,
      hmr: {
        // https://github.com/crxjs/chrome-extension-tools/issues/648
        port: 3303,
      },
    },

    resolve: {
      alias: {
        '~': r('src'),
        '~cwd': cwd(),
      },
    },

    define: {
      TAILWIND_THEME: JSON.stringify(twConfig.theme),
    },

    css: {
      postcss: {
        plugins: [PostcssPresetEnv(), tailwind(twConfig)],
      },
    },

    plugins: [
      AutoImport({
        dts: 'src/types/auto-imports.d.ts',
        imports: [
          {
            react: [
              'Fragment',
              'Suspense',
              'forwardRef',
              'useCallback',
              'useEffect',
              'useId',
              'useImperativeHandle',
              'useInsertionEffect',
              'useLayoutEffect',
              'useMemo',
              'useRef',
              'useState',
            ],
            'react-dom': ['createPortal'],
            'framer-motion': ['AnimatePresence', 'motion'],
            clsx: ['clsx'],
            'clsx/lite': [['clsx', 'clsxLite']],
            'webextension-polyfill': [['*', 'browser']],
          },
        ],
      }) as Plugin,

      react(),

      crx({
        manifest,
        browser: 'chrome',
      }),

      // https://github.com/Jevon617/unplugin-svg-component
      SvgComponent({
        iconDir: r('src/assets/svg-icons'),
        dts: true,
        // FIXME: when set to `src/types`, it will ifinity reload page when multi page open, maybe conflict with @crxjs/vite-plugin
        dtsDir: r(''),
        componentStyle: 'width: 1em; height: 1em;',
        projectType: 'react',
        preserveColor: /./,
      }),
    ],

    publicDir: 'public',

    build: {
      minify: isBuild ? 'esbuild' : false,

      reportCompressedSize: true,
      // disable inlining assets
      assetsInlineLimit: 0,

      rollupOptions: {
        input: {
          'devtools-panel': 'src/pages/devtools-panel/index.html',
          devtools: 'src/devtools/index.html',
        },
      },
    },

    esbuild: {
      drop: isBuild ? ['console', 'debugger'] : [],
    },
  }
})
