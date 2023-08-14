import './App.css'
import React from 'react'
import { createBar } from './components/bar.jsx'
import { createNavigation } from './components/navigation.jsx'
import { createPlaylist } from './components/playlist.jsx'
import { createSidebar } from './components/sidebar.jsx'
import { createCenterBlockFilter } from './components/centerblock-filter.jsx'
import { createContentTitlePlaylist } from './components/content-title-playlist.jsx'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          {createNavigation()}
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
           {createCenterBlockFilter()}
            <div className="centerblock__content">
              {createContentTitlePlaylist()}
              {createPlaylist()}
            </div>
          </div>
          {createSidebar()}
        </main>
        {createBar()}
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
