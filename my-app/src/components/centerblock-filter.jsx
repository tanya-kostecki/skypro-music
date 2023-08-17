import React from 'react'
import { useState } from 'react'

const PerformerListFilter = () => {
  return (
    <ul className="filter__performer-list_ul">
      <li className="filter__performer">Nero</li>
      <li className="filter__performer">Dynoro, Outwork, Mr. Gee</li>
      <li className="filter__performer">Ali Backgor</li>
      <li className="filter__performer">Стоункат, Psychopath</li>
      <li className="filter__performer">Jaded, Will Clarke, AR/CO</li>
      <li className="filter__performer">Blue Fountain, Zeds Dead</li>
      <li className="filter__performer">
        HYBIT, Mr. Black, Offer Nissim, Hi Profile
      </li>
      <li className="filter__performer">minthaze</li>
      <li className="filter__performer">Calvin Harris, Disciples</li>
      <li className="filter__performer">Tom Boxer</li>
    </ul>
  )
}

const YearListFilter = () => {
  return (
    <ul className="filter__year-list_ul">
      <li className="filter__year">По умолчанию</li>
      <li className="filter__year">Сначала новые</li>
      <li className="filter__year">Сначала старые</li>
    </ul>
  )
}

const GenreListFilter = () => {
  return (
    <ul className="filter__genre-list_ul">
      <li className="filter__genre">Хип-хоп</li>
      <li className="filter__genre">Поп-музыка</li>
      <li className="filter__genre">Техно</li>
      <li className="filter__genre">Инди</li>
      <li className="filter__genre">Рок-музыка</li>
      <li className="filter__genre">Кантри</li>
      <li className="filter__genre">Джаз</li>
      <li className="filter__genre">Классическая</li>
    </ul>
  )
}

export function CenterBlockFilter() {
  const [performerFilter, setPerformerFilter] = useState(false)
  const [yearFilter, setYearFilter] = useState(false)
  const [genreFilter, setGenreFilter] = useState(false)

  const togglePerformerCategory = () => {
    setPerformerFilter(!performerFilter)
    setYearFilter(false)
    setGenreFilter(false)
  }

  const toggleYearCategory = () => {
    setYearFilter(!yearFilter)
    setPerformerFilter(false)
    setGenreFilter(false)
  }

  const toggleGenreCategory = () => {
    setGenreFilter(!genreFilter)
    setPerformerFilter(false)
    setYearFilter(false)
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className="filter__button button-author _btn-text"
        onClick={togglePerformerCategory}
      >
        исполнителю
      </div>
      <div
        className="filter__button button-year _btn-text"
        onClick={toggleYearCategory}
      >
        году выпуска
      </div>
      <div
        className="filter__button button-genre _btn-text"
        onClick={toggleGenreCategory}
      >
        жанру
      </div>
      <div className="filter__scroll">
          {performerFilter ? <PerformerListFilter /> : null}
          {yearFilter ? <YearListFilter /> : null}
          {genreFilter ? <GenreListFilter /> : null}
      </div>
    </div>
  )
}
