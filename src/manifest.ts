import type { Manifest } from 'webextension-polyfill'

type Permissions =
  | Manifest.PermissionNoPrompt
  | Manifest.OptionalPermission
  | 'sidePanel'
type OptionalPermissions = Manifest.OptionalPermission
type MV2Keys = 'browser_action' | 'user_scripts' | 'page_action'

type ChromeManifestExtra = {
  side_panel?: {
    default_path: string
  }
}

export function manifest() {
  const manifest = {
    manifest_version: 3,
    name: 'My Extension',
    version: '0.0.1',
    permissions: ['sidePanel'] as Permissions[],
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
    side_panel: {
      default_path: 'src/pages/sidepanel/index.html',
    },
    content_scripts: [
      {
        matches: ['<all_urls>'],
        js: ['src/content-scripts/main.tsx'],
        run_at: 'document_end',
      },
    ],

    // devtools_page: 'src/devtools/index.html',
    web_accessible_resources: [
      {
        resources: ['assets/*'],
        matches: ['<all_urls>'],
      },
    ],
  } satisfies Omit<Manifest.WebExtensionManifest, MV2Keys> & ChromeManifestExtra

  return manifest
}
