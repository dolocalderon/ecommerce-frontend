import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ArticleProvider } from './context/ArticleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArticleProvider>
      <App />
    </ArticleProvider>
  </StrictMode>,
)
