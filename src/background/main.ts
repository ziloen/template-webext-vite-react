import { backgroundForwardMessage, onMessage } from 'typed-webext/message'

backgroundForwardMessage()

browser.runtime.onInstalled.addListener(details => {})

onMessage('get-sender', ({ sender, data }) => {
  return sender
})
