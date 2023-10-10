import { useContext, useEffect } from 'react'
import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import * as S from '../main/layout.styles'
import { userContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'

export const FavouritesPage = ({ isLoading, error }) => {
  const {token, setToken} = useContext(userContext)

  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>Мои Треки</S.CenterblockH2>
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />
          <p>Здесь пока нет треков</p>
          {/* <Playlist isLoading={isLoading} error={error} /> */}
        </S.CenterblockContent>
      </div>
    )
  } else {
    const navigate = useNavigate()

    useEffect(() => {
      setToken(false)
      // navigate('/login', { replace: true })
    }, [])
  }
}
