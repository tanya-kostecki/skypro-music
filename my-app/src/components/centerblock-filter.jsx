import React from 'react'
import { useState } from 'react'

const PerformerListFilter = () => {
  return (
    <div className="filter__scroll">
      <ul className="filter__text-list_ul">
        <li className="filter__text">Nero</li>
        <li className="filter__text">Dynoro, Outwork, Mr. Gee</li>
        <li className="filter__text">Ali Backgor</li>
        <li className="filter__text">Стоункат, Psychopath</li>
        <li className="filter__text">Jaded, Will Clarke, AR/CO</li>
        <li className="filter__text">Blue Fountain, Zeds Dead</li>
        <li className="filter__text">
          HYBIT, Mr. Black, Offer Nissim, Hi Profile
        </li>
        <li className="filter__text">minthaze</li>
        <li className="filter__text">Calvin Harris, Disciples</li>
        <li className="filter__text">Tom Boxer</li>
      </ul>
    </div>
  )
}

const YearListFilter = () => {
  return (
    <div className="filter__scroll">
      <ul className="filter__text-list_ul">
        <li className="filter__text">По умолчанию</li>
        <li className="filter__text">Сначала новые</li>
        <li className="filter__text">Сначала старые</li>
      </ul>
    </div>
  )
}

const GenreListFilter = () => {
  return (
    <div className="filter__scroll">
      <ul className="filter__text-list_ul">
        <li className="filter__text">Хип-хоп</li>
        <li className="filter__text">Поп-музыка</li>
        <li className="filter__text">Техно</li>
        <li className="filter__text">Инди</li>
        <li className="filter__text">Рок-музыка</li>
        <li className="filter__text">Кантри</li>
        <li className="filter__text">Джаз</li>
        <li className="filter__text">Классическая</li>
      </ul>
    </div>
  )
}

export function CenterBlockFilter() {
  const [performerFilter, setPerformerFilter] = useState(false)
  const [yearFilter, setYearFilter] = useState(false)
  const [genreFilter, setGenreFilter] = useState(false)

  const togglePerformerCategory = () => {
    setPerformerFilter((prev) => !prev)
    setYearFilter(false)
    setGenreFilter(false)
  }

  const toggleYearCategory = () => {
    setYearFilter((prev) => !prev)
    setPerformerFilter(false)
    setGenreFilter(false)
  }

  const toggleGenreCategory = () => {
    setGenreFilter((prev) => !prev)
    setPerformerFilter(false)
    setYearFilter(false)
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__block">
        <div className="filter__items">
          <div
            className={`filter__button button-author _btn-text ${
              performerFilter ? 'filter-active' : null
            }`}
            onClick={togglePerformerCategory}
          >
            исполнителю
          </div>
          {performerFilter ? <PerformerListFilter /> : null}
        </div>

        <div className="filter__items">
          <div
            className={`filter__button button-year _btn-text ${
              yearFilter ? 'filter-active' : null
            }`}
            onClick={toggleYearCategory}
          >
            году выпуска
          </div>
          {yearFilter ? <YearListFilter /> : null}
        </div>

        <div className="filter__items">
          <div
            className={`filter__button button-genre _btn-text ${
              genreFilter ? 'filter-active' : null
            }`}
            onClick={toggleGenreCategory}
          >
            жанру
          </div>
          {genreFilter ? <GenreListFilter /> : null}
        </div>
      </div>
    </div>
  )
}
