import { CreateNavigation } from "./NavMenu/navigation"
import { CenterBlockFilter } from "./centerblock-filter"
import { ContentTitlePlaylist } from "./content-title-playlist"
import { Playlist } from "./playlist/playlist"
import { Sidebar } from "./sidebar/sidebar"

export function Main({ isLoading }) {
  return (
    <main className="main">
      {<CreateNavigation/>}
      <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        {<CenterBlockFilter isLoading={isLoading}/>}
        <div className="centerblock__content">
          {<ContentTitlePlaylist isLoading={isLoading}/>}
          {<Playlist isLoading={isLoading}/>}
        </div>
      </div>
      {<Sidebar isLoading={isLoading}/>}
    </main>
  )
}
