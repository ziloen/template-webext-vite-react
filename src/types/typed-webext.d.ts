import type { Extension, Runtime, Tabs } from 'webextension-polyfill'

declare module 'typed-webext' {
  interface MessageProtocol {
    'get-sender': [never, Runtime.MessageSender]
  }

  interface StreamProtocol {}

  interface StorageLocalProtocol {}
}

export {}
