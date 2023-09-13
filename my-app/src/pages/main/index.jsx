import { Container, Wrapper } from '../../app.styles'
import { Main } from '../../components/main/main'
import { Bar } from '../../components/bar/bar'
import { Footer } from '../../components/footer'
import { useState, useEffect } from 'react'
import { getAllTracks } from '../../api'

export const MainPage = ({ setToken }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [tracks, setTracks] = useState()
  const [error, setError] = useState(null)

  const [track, setTrack] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    getAllTracks().then((tracks) => {
      setTracks(tracks)
      setIsLoading(false)
      setError(null)
    }).catch((error) => {
      setError(error.message)
      setIsLoading(false)
    })
  }, [])

  return (
    <Wrapper>
      <Container>
        <Main
          isLoading={isLoading}
          setToken={setToken}
          tracks={tracks}
          error={error}
          setTrack={setTrack}
        />
        {track ? (
          <Bar isLoading={isLoading} track={track} />
        ) : null}
        <Footer />
      </Container>
    </Wrapper>
  )
}
