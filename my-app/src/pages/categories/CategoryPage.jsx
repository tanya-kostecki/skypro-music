import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import * as S from '../main/layout.styles'

import { useParams } from 'react-router-dom'
import { PLAYLISTS } from '../../sidebar-constants'
import { useContext, useEffect } from 'react'
import { userContext } from '../../context/userContext'
import { useDispatch } from 'react-redux'
import { selectCurrentTrack, selectIsPlaying } from '../../store/actions/creators/currentTrack'
import {
  useGetSelectionByIdQuery,
  useGetSelectionsQuery,
} from '../../services/playlists'
import { setCurrentPlaylist, setIsLoading } from '../../store/slices/trackSlice'

export const CategoryPage = ({ isLoading, error }) => {
  const params = useParams()
  const { token, setToken } = useContext(userContext)
  const dispatch = useDispatch()

  const { data: currentCategory } = useGetSelectionByIdQuery(Number(params.id))

  useEffect(() => {
    dispatch(setCurrentPlaylist(currentCategory?.items))
    dispatch(setIsLoading(false))
  }, [currentCategory])

  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>{currentCategory?.name}</S.CenterblockH2>
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />
          <Playlist tracks={currentCategory?.items} />
        </S.CenterblockContent>
      </div>
    )
  } else {
    useEffect(() => {
      setToken(false)
      dispatch(selectCurrentTrack({}))
      dispatch(selectIsPlaying(false))
    }, [])
  }
}
