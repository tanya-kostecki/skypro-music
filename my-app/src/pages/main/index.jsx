import { Container, Wrapper } from '../../app.styles'
import { Main } from '../../components/main/main'
import { Bar } from '../../components/bar/bar'
import { Footer } from '../../components/footer'
import { useState, useEffect } from 'react'

export const MainPage = ({ setToken }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const changeState = () => setIsLoading((prev) => !prev)
    const timer = setTimeout(changeState, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Wrapper>
      <Container>
        <Main isLoading={isLoading} setToken={setToken} />
        <Bar isLoading={isLoading} />
        <Footer />
      </Container>
    </Wrapper>
  )
}
