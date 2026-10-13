import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)