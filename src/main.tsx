// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainLayoutGuess from './components/Layout/MainLayoutGuest'
import App from './App.tsx'
import Container from './components/Layout/Container'

createRoot(document.getElementById('root')!).render(
<MainLayoutGuess>
  <Container>
    <App />
  </Container>
  
</MainLayoutGuess>

)
