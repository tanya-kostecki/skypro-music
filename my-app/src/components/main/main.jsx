import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import { CenterBlockFilter } from '../../components/centerblock-filter/centerblock-filter'
import * as S from './main.styles'
import { useContext, useEffect } from 'react'
import { userContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentTrack, selectIsPlaying } from '../../store/actions/creators/currentTrack'

import { currentIsLoading } from '../../store/selectors/currentTrack'

export const Main = ({ error }) => { //isLoading
  const {token, setToken} = useContext(userContext)
  const dispatch = useDispatch()

  const isLoading = useSelector(currentIsLoading) //

  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <CenterBlockFilter isLoading={isLoading} />
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />
          <Playlist isLoading={isLoading} error={error} />
        </S.CenterblockContent>
      </div>
    )
  } else {
    const navigate = useNavigate()

    useEffect(() => {
      setToken(false)
      dispatch(selectCurrentTrack({}))
      dispatch(selectIsPlaying(false))
      // navigate('/login', { replace: true })

    }, [])
  }
}