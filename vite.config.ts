import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { resolve as r } from 'node:path'
import { cwd } from 'node:process'
import PostcssPresetEnv from 'postcss-preset-env'
import tailwind from 'tailwindcss'
import resolveConfig from 'tailwindcss/resolveConfig'
import AutoImport from 'unplugin-auto-import/vite'
import SvgComponent from 'unplugin-svg-component/vite'
import type { Plugin, Rollup } from 'vite'
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
        plugins: [
          PostcssPresetEnv({
            stage: false,
            features: {
              'nesting-rules': true,
              'media-query-ranges': true,
            },
          }),
          tailwind(twConfig),
        ],
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

      crx({
        manifest,
        browser: 'chrome',
        // contentScripts: {}
      }),

      {
        name: 'Style-Import',
        enforce: 'post',
        generateBundle(options, bundle, isWrite) {
          const bundleValues = Object.values(bundle)
          const styleFile = bundleValues.find(
            v => v.name?.endsWith('.css') && 'source' in v
          )
          if (!styleFile) {
            throw new Error('style file not found')
          }

          const fileName = styleFile.fileName

          const injectTarget = bundleValues.filter(
            v => 'isEntry' in v && !!v.isEntry && !!v.code
          ) as Rollup.OutputChunk[]

          for (const entry of injectTarget) {
            entry.code = entry.code.replaceAll(
              'STYLE_OUTPUT',
              JSON.stringify(fileName)
            )
          }
        },
      },
    ],

    publicDir: 'public',

    build: {
      minify: isBuild ? 'esbuild' : false,

      sourcemap: isBuild ? false : 'inline',
      // disable CSS code splitting
      cssCodeSplit: false,
      reportCompressedSize: false,
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

    optimizeDeps: {
      include: ['webextension-polyfill'],
    },
  }
})
