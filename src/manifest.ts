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
    devtools_page: 'src/devtools/index.html',
    web_accessible_resources: [
      {
        resources: ['src/pages/devtools-panel/index.html'],
        matches: ['<all_urls>'],
      },
    ],
  } satisfies Omit<Manifest.WebExtensionManifest, MV2Keys>

  return manifest
}
