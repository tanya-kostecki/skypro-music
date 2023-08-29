import React from 'react'
import { Wrapper, Container } from './app.styles'
import GlobalStyle from './app.styles'
import { AppRoutes } from './routes'
import { MainPage } from './pages/main'

function App() {
  

  return (
    <div>
      <AppRoutes />
      <GlobalStyle />
    </div>
  )
}

export default App
