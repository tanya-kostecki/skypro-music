import React, { useEffect } from 'react'
import { useState } from 'react'
import * as S from './centerblock.styles'
import { useGetAllTracksQuery } from '../../services/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { filtersSelector } from '../../store/selectors/selectors'
import { setFilteredPlaylist, setFilters } from '../../store/slices/trackSlice'

const PerformerListFilter = () => {
  const { data: playlist } = useGetAllTracksQuery()
  
  const authors = playlist?.map((track) => track.author)
  const authorsSet = new Set(authors)
  const allAuthors = Array.from(authorsSet)

  const dispatch = useDispatch()
  const filters = useSelector(filtersSelector)

  const filterAuthor = (authorFilter) => {
    dispatch(setFilters({...filters, status: true, authors: authorFilter}))
  }
  
  const removeFilter = () => {
    dispatch(setFilters({...filters, status: false, authors: ''}))
  }

  const toggleAuthorFilter = (filter) => {
    if (!filters.status) {
      filterAuthor(filter)
    } else {
      removeFilter()
    }
    console.log(filter)
  }

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        {allAuthors?.map((author, index) => (
          <S.FilterText
            key={`author-${index}`}
            onClick={() => toggleAuthorFilter(author)}
          >
            {author}
          </S.FilterText>
        ))}
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

const YearListFilter = () => {
  const dispatch = useDispatch()
  const filters = useSelector(filtersSelector)
  
  const filterYears = (yearFilter) => {
    dispatch(setFilters({ ...filters, status: true, years: yearFilter }))
  }

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText onClick={() => filterYears('По умолчанию')}>
          По умолчанию
        </S.FilterText>
        <S.FilterText onClick={() => filterYears('Сначала новые')}>
          Сначала новые
        </S.FilterText>
        <S.FilterText onClick={() => filterYears('Сначала старые')}>
          Сначала старые
        </S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

const GenreListFilter = () => {
  const dispatch = useDispatch()
  const filters = useSelector(filtersSelector)

  const filterGenre = (genreFilter) => {
    dispatch(setFilters({ ...filters, status: true, genre: genreFilter }))
  }

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText onClick={() => filterGenre(false)}>По умолчанию</S.FilterText>
        <S.FilterText onClick={() => filterGenre('Классическая музыка')}>Классическая музыка</S.FilterText>
        <S.FilterText onClick={() => filterGenre('Электронная музыка')}>Электронная музыка</S.FilterText>
        <S.FilterText onClick={() => filterGenre('Рок музыка')}>Рок музыка</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

export function CenterBlockFilter() {
  const [performerFilter, setPerformerFilter] = useState(false)
  const [yearFilter, setYearFilter] = useState(false)
  const [genreFilter, setGenreFilter] = useState(false)

  //
  const filters = useSelector(filtersSelector)
  const { data: playlist } = useGetAllTracksQuery()
  const [authorsFilter, setAuthorsFilter] = useState('')

  useEffect(() => {
    setAuthorsFilter(playlist?.map((track) => track.author))
  }, [playlist])
  //

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
    <S.CenterblockFilter className="filter">
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterBlock>
        <div className="filter__items">
          {performerFilter ? (
            <S.FilterButtonActive
              className="button-author _btn-text"
              onClick={togglePerformerCategory}
            >
              исполнителю
            </S.FilterButtonActive>
          ) : (
            <S.FilterButton
              className="button-author _btn-text"
              onClick={togglePerformerCategory}
            >
              исполнителю
            </S.FilterButton>
          )}
          {performerFilter ? <PerformerListFilter /> : null}
        </div>

        <div className="filter__items">
          {yearFilter ? (
            <S.FilterButtonActive
              className="button-author _btn-text"
              onClick={toggleYearCategory}
            >
              году выпуска
            </S.FilterButtonActive>
          ) : (
            <S.FilterButton
              className="button-author _btn-text"
              onClick={toggleYearCategory}
            >
              году выпуска
            </S.FilterButton>
          )}
          {yearFilter ? <YearListFilter /> : null}
        </div>

        <div className="filter__items">
          {genreFilter ? (
            <S.FilterButtonActive
              className="button-author _btn-text"
              onClick={toggleGenreCategory}
            >
              жанру
            </S.FilterButtonActive>
          ) : (
            <S.FilterButton
              className="button-author _btn-text"
              onClick={toggleGenreCategory}
            >
              жанру
            </S.FilterButton>
          )}
          {genreFilter ? <GenreListFilter /> : null}
        </div>
      </S.FilterBlock>
    </S.CenterblockFilter>
  )
}
