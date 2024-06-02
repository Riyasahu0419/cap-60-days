import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>
    <BrowserRouter>
    <AuthProvider>

    <App />
 
    </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>
    
)
