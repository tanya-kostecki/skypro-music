import { Container, Wrapper } from '../../app.styles'
import { Main } from '../../components/main/main'
import { Bar } from '../../components/bar/bar'
import { Footer } from '../../components/footer'
import { useState, useEffect } from 'react'

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const changeState = () => setIsLoading(!isLoading)
    const timer = setTimeout(changeState, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Wrapper>
      <Container>
        <Main isLoading={isLoading}/>
        <Bar isLoading={isLoading} />
        <Footer />
      </Container>
    </Wrapper>
  )
}
