import type { Extension, Runtime, Tabs } from 'webextension-polyfill'

declare module 'typed-webext' {
  interface MessageProtocol {
    get_sender: [never, Runtime.MessageSender]
  }

  interface StreamProtocol {}

  interface StorageLocalProtocol {}
}

export { }

