import '~/utils/polyfill'

import styles from '~/styles/tailwind.css?inline'

import { createRoot } from 'react-dom/client'
import { App } from './App'

const div = document.createElement('div')
const shadow = div.attachShadow({ mode: 'closed' })

const styleSheet = new CSSStyleSheet()
styleSheet.replaceSync(styles)
shadow.adoptedStyleSheets = [styleSheet]

// document.body.append(div)

createRoot(shadow).render(<App />)
