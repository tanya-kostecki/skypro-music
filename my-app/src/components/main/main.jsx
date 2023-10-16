import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import { CenterBlockFilter } from '../../components/centerblock-filter/centerblock-filter'
import * as S from './main.styles'
import { useContext, useEffect } from 'react'
import { userContext } from '../../context/userContext'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack, setIsPlaying } from '../../store/slices/trackSlice'

import { selectIsLoading } from '../../store/selectors/selectors'
import { useGetAllTracksQuery } from '../../services/playlists'

export const Main = ({ error }) => {
  const {token, setToken} = useContext(userContext)
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  const { data } = useGetAllTracksQuery()

  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <CenterBlockFilter isLoading={isLoading} />
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />
          <Playlist isLoading={isLoading} error={error} tracks={data} />
        </S.CenterblockContent>
      </div>
    )
  } else {
    useEffect(() => {
      setToken(false)
      dispatch(setCurrentTrack({}))
      dispatch(setIsPlaying(false))
    }, [])
  }
}