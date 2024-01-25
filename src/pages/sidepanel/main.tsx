import '~/styles'
import '~/utils/polyfill'

import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root')!).render(<App />)
