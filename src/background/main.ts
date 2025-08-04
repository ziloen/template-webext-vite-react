import { onMessage } from 'typed-webext'

browser.runtime.onInstalled.addListener((details) => {})

onMessage.get_sender(({ sender, data }) => {
  return sender
})
