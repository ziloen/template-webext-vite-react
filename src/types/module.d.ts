declare module 'webextension-polyfill' {
  const sidePanel: typeof chrome.sidePanel | undefined

  namespace Runtime {
    interface Static {
      getContexts?: typeof chrome.runtime.getContexts
    }
  }
}

export {}
