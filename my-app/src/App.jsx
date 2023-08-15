import './App.css'
import React from 'react'
import { Bar } from './components/bar.jsx'
import { CreateNavigation } from './components/navigation.jsx'
import { Playlist } from './components/playlist.jsx'
import { Sidebar } from './components/sidebar.jsx'
import { CenterBlockFilter } from './components/centerblock-filter.jsx'
import { ContentTitlePlaylist } from './components/content-title-playlist.jsx'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          {<CreateNavigation />}
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
            {<CenterBlockFilter />}
            <div className="centerblock__content">
              {<ContentTitlePlaylist />}
              {<Playlist />}
            </div>
          </div>
          {<Sidebar />}
        </main>
        {<Bar/>}
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
