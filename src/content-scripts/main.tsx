import '~/styles'
import '~/utils/polyfill'

import { createRoot } from 'react-dom/client'
import { App } from './App'

const div = document.createElement('div')
const shadow = div.attachShadow({ mode: 'closed' })

const styleSheet = new CSSStyleSheet()
shadow.adoptedStyleSheets = [styleSheet]

// document.body.append(div)

createRoot(shadow).render(<App />)

const fileName = typeof STYLE_OUTPUT === 'undefined' ? '' : STYLE_OUTPUT

fetch(browser.runtime.getURL(fileName))
  .then(r => r.text())
  .then(m => {
    styleSheet.replaceSync(m)
  })
