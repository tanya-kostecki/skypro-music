import React from 'react'
import GlobalStyle from './app.styles'
import { AppRoutes } from './routes'
import { useState } from 'react'
import { userContext } from './context/userContext'

function App() {
  // const initialToken = localStorage.getItem('token', '')
  // const [token, setToken] = useState(initialToken)
  const [token, setToken] = useState()
  
  return (
    <userContext.Provider value={token}>
      <AppRoutes token={token} setToken={setToken} />
      <GlobalStyle />
    </userContext.Provider>
  )
}

export default App
