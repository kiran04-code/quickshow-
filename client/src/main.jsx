import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {ClerkProvider} from "@clerk/clerk-react"
import { AuthContextProvider } from './context/auth.jsx'
 const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <AuthContextProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </ClerkProvider>
    </AuthContextProvider>

  </StrictMode>,
)
