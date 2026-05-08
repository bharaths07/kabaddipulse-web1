import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Simple initialization logger
console.log('KabaddiPulse: Initializing Application...')

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('KabaddiPulse Error: Root element not found!')
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    console.log('KabaddiPulse: Application Rendered Successfully.')
  } catch (error) {
    console.error('KabaddiPulse Error during render:', error)
  }
}
