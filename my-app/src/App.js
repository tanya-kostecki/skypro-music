import React from 'react'
import { useState, useEffect } from 'react'
import { Bar } from './components/bar/bar'
import { Main } from './components/main/main'
import { Footer } from './components/footer'
import { Wrapper, Container } from './app.styles'
import GlobalStyle from './app.styles'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const changeState = () => setIsLoading(!isLoading)
    const timer =setTimeout(changeState, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Wrapper>
      <GlobalStyle/>
      <Container>
        <Main isLoading={isLoading} />
        <Bar isLoading={isLoading} />
        <Footer />
      </Container>
    </Wrapper>
  )
}

export default App
