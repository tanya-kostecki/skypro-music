import { useEffect } from "react"
import { CreateNavigation } from "../NavMenu/navigation"
import { CenterBlockFilter } from '../centerblock-filter/centerblock-filter'
import { ContentTitlePlaylist } from '../content-title-playlist/content-title-playlist'
import { Playlist } from '../playlist/playlist'
import { Sidebar } from '../sidebar/sidebar'
import * as S from './main.styles'
import { useNavigate } from "react-router-dom"

export function Main({ isLoading, setToken, error }) {
  if (localStorage.getItem('token', 'token')) {
    return (
      <S.MainMain>
        <CreateNavigation setToken={setToken} />
        <S.MainCenterblock className="cterblock">
          <S.CenterblockSearch className="search">
            <S.SearchSvg>
              <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText type="search" placeholder="Поиск" name="search" />
          </S.CenterblockSearch>
          <S.CenterblockH2>Треки</S.CenterblockH2>
          <CenterBlockFilter isLoading={isLoading} />
          <S.CenterblockContent>
            <ContentTitlePlaylist isLoading={isLoading} />
            <Playlist
              isLoading={isLoading}
              error={error}
            />
          </S.CenterblockContent>
        </S.MainCenterblock>
        <Sidebar isLoading={isLoading} />
      </S.MainMain>
    )
  } else {
    const navigate = useNavigate()

    useEffect(() => {
      setToken(false)
      navigate('/login', { replace: true })
    }, [])
  }
}
