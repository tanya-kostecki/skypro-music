import { Container, Wrapper } from '../../app.styles'
import { Main } from '../../components/main/main'
import { Bar } from '../../components/bar/bar'
import { Footer } from '../../components/footer'
import { useState, useEffect } from 'react'
import { getAllTracks } from '../../api/trackApi'

import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentTracklist } from '../../store/actions/creators/currentTrack'
import { currentTrackPlayer } from '../../store/selectors/currentTrack'

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  const [error, setError] = useState(null)

  const track = useSelector(currentTrackPlayer) //

  useEffect(() => {
    setIsLoading(true)
    getAllTracks()
      .then((tracklist) => {
        dispatch(selectCurrentTracklist(tracklist))
        setIsLoading(false)
        setError(null)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  return (
    <Wrapper>
      <Container>
        <Main
          isLoading={isLoading}
          error={error}
        />
        {track ? <Bar isLoading={isLoading} /> : null}
        <Footer />
      </Container>
    </Wrapper>
  )
}
