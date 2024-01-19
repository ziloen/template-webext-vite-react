import type { Manifest } from 'webextension-polyfill'

type Permissions = Manifest.PermissionNoPrompt | Manifest.OptionalPermission
type OptionalPermissions = Manifest.OptionalPermission
type MV2Keys = 'browser_action' | 'user_scripts' | 'page_action'

export function manifest() {
  const manifest = {
    manifest_version: 3,
    name: 'My Extension',
    version: '0.0.1',
    permissions: [] as Permissions[],
    optional_permissions: [] as OptionalPermissions[],
    action: {
      default_popup: 'src/pages/popup/index.html',
    },
    background: {
      service_worker: 'src/background/main.ts',
      type: 'module',
      scripts: ['src/background/main.ts'],
    },
    options_ui: {
      page: 'src/pages/options/index.html',
      open_in_tab: true,
    },
    // devtools_page: 'src/devtools/index.html',
    web_accessible_resources: [],
  } satisfies Omit<Manifest.WebExtensionManifest, MV2Keys>

  return manifest
}
