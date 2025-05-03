// import '~/styles'
import '~/utils/polyfill'

import { createRoot } from 'react-dom/client'
import { sendMessage } from 'typed-webext'
import { App } from './App'

const div = document.createElement('div')
const shadow = div.attachShadow({ mode: 'closed' })

const styleSheet = new CSSStyleSheet()
shadow.adoptedStyleSheets = [styleSheet]

sendMessage('get-sender').then((sender) => {
  globalThis.console.log({ sender })
})

// document.body.append(div)

createRoot(shadow).render(<App />)

if (typeof STYLE_OUTPUT !== 'undefined') {
  fetch(browser.runtime.getURL(STYLE_OUTPUT))
    .then((r) => r.text())
    .then((m) => {
      styleSheet.replaceSync(m)
    })
}
