import { CreateNavigation } from "../NavMenu/navigation"
import { CenterBlockFilter } from '../centerblock-filter/centerblock-filter'
import { ContentTitlePlaylist } from '../content-title-playlist/content-title-playlist'
import { Playlist } from '../playlist/playlist'
import { Sidebar } from '../sidebar/sidebar'
import * as S from './main.styles'

export function Main({ isLoading }) {
  return (
    <S.MainMain>
      {<CreateNavigation />}
      <S.MainCenterblock className="centerblock">
        <S.CenterblockSearch className="search">
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </S.CenterblockSearch>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        {<CenterBlockFilter isLoading={isLoading} />}
        <S.CenterblockContent>
          {<ContentTitlePlaylist isLoading={isLoading} />}
          {<Playlist isLoading={isLoading} />}
        </S.CenterblockContent>
      </S.MainCenterblock>
      {<Sidebar isLoading={isLoading} />}
    </S.MainMain>
  )
}
