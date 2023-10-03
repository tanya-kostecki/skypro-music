import { Container, Wrapper } from '../../app.styles'
import { Main } from '../../components/main/main'
import { Bar } from '../../components/bar/bar'
import { Footer } from '../../components/footer'
import { useState, useEffect } from 'react'
import { getAllTracks } from '../../api/trackApi'

import { useDispatch } from 'react-redux'
import { selectCurrentTracklist } from '../../store/actions/creators/currentTrack'
import { useSelector } from 'react-redux'
import { currentTracklistPlayer } from '../../store/selectors/currentTrack'

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  // const [getTracks, setGetTracks] = useState() //
  const dispatch = useDispatch()

  // const tracklist = useSelector(currentTracklistPlayer)
  const [error, setError] = useState(null)

  const [track, setTrack] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    getAllTracks()
      .then((tracklist) => {//tracks
        // setGetTracks(tracks)
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
          // getTracks={getTracks} //delete getTracks
          error={error}
          setTrack={setTrack}
        />
        {track ? <Bar isLoading={isLoading} /> : null}
        <Footer />
      </Container>
    </Wrapper>
  )
}
