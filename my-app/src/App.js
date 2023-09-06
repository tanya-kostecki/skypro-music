import React from 'react'
import GlobalStyle from './app.styles'
import { AppRoutes } from './routes'
import { useState } from 'react'

function App() {
  const initialToken = localStorage.getItem('token', '')
  const [token, setToken] = useState(initialToken)
  
  return (
    <div>
      <AppRoutes token={token} setToken={setToken} />
      <GlobalStyle />
    </div>
  )
}

export default App
