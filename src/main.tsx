import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}

    <h1 className='text-3xl font-bold text-red-500'>React App testing tailwind</h1>
  </StrictMode>,
)
