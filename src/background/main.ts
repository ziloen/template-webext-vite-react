import { onMessage } from 'typed-webext'

browser.runtime.onInstalled.addListener((details) => {})

onMessage('get-sender', ({ sender, data }) => {
  return sender
})
