import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */

/* createRoot(document.getElementById('root')).render(<App />) */

ReactDOM.render(<App />,document.getElementById('root'));