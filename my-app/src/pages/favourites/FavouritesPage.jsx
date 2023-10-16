import { useContext, useEffect } from 'react'
import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import * as S from '../main/layout.styles'
import { userContext } from '../../context/userContext'
import { setCurrentTrack, setIsPlaying } from '../../store/slices/trackSlice'
import { useDispatch } from 'react-redux'
import { useGetFavouriteTracksQuery } from '../../services/playlists'

export const FavouritesPage = ({ isLoading, error }) => {
  const {token, setToken} = useContext(userContext)
  const dispatch = useDispatch()

  const { data } = useGetFavouriteTracksQuery()

  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>Мои Треки</S.CenterblockH2>
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />
          <Playlist tracks={data} />
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
