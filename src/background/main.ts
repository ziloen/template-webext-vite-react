import 'typed-webext/background'

import { onMessage } from 'typed-webext/message'

browser.runtime.onInstalled.addListener(details => {})

onMessage('get-sender', ({ sender, data }) => {
  return sender
})
