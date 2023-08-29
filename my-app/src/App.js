import React from 'react'
import GlobalStyle from './app.styles'
import { AppRoutes } from './routes'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(false)
  
  return (
    <div>
      <AppRoutes token={token} setToken={setToken} />
      <GlobalStyle />
    </div>
  )
}

export default App
