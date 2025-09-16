import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import A from './pages/A.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <A />
  </StrictMode>,
)
