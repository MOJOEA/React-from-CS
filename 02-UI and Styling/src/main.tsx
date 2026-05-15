import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Login from './page/Login.tsx'
import Practice2 from './page/Practice2.tsx'

import Header from './components/header/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Practice2 />
  </StrictMode>,
)
