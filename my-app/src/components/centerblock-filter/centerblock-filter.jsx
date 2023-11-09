import React, { useEffect } from 'react'
import { useState } from 'react'
import * as S from './centerblock.styles'
import { useGetAllTracksQuery } from '../../services/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { filtersSelector } from '../../store/selectors/selectors'
import { setFilteredPlaylist, setFilters } from '../../store/slices/trackSlice'

const PerformerListFilter = () => {
  const { data: playlist } = useGetAllTracksQuery()

  const dispatch = useDispatch()
  const filters = useSelector(filtersSelector)

  const authors = playlist?.map((track) => track.author)
  const authorsSet = new Set(authors)
  const allAuthors = Array.from(authorsSet)

  // const filterAuthor = (authorFilter) => {
  //   dispatch(setFilters({...filters, status: true, authors: authorFilter}))
  // }

  const filterAuthors = (author) => {
    const filteredAuthor = {
      ...filters,
      status: true,
      authors: [...filters.authors, author],
    }
    dispatch(setFilters(filteredAuthor))
    console.log(filteredAuthor.authors)
  }

  const removeFilterAuthors = (author) => {
    const currentAuthors = [...filters.authors]
    const index = currentAuthors.indexOf(author)

    currentAuthors.splice(index, 1)

    const deletedAuthor = {
      ...filters,
      status: true,
      authors: [...currentAuthors],
    }

    dispatch(setFilters(deletedAuthor))
    console.log(deletedAuthor.authors)

    if (!deletedAuthor.authors.length) {
      dispatch(setFilters({...filters, status: false, authors: ''}))
    }
  }

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        {allAuthors?.map((author, index) =>
          !filters.authors.includes(author) ? (
            <S.FilterText
              key={`author-${index}`}
              onClick={() => filterAuthors(author)}
            >
              {author}
            </S.FilterText>
          ) : (
            <S.FilterTextActive
              key={`author-${index}`}
              onClick={() => removeFilterAuthors(author)}
            >
              {author}
            </S.FilterTextActive>
          ),
        )}
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
  const { data: playlist } = useGetAllTracksQuery()

  const dispatch = useDispatch()
  const filters = useSelector(filtersSelector)

  const genre = playlist?.map((track) => track.genre)
  const genresSet = new Set(genre)
  const allGenres = Array.from(genresSet)

  // const filterGenre = (genreFilter) => {
  //   dispatch(setFilters({ ...filters, status: true, genre: genreFilter }))
  // }

  const filterGenre = (genre) => {
    const filteredGenre = {
      ...filters,
      status: true,
      genre: [...filters.genre, genre],
    }
    dispatch(setFilters(filteredGenre))
  }

  const removeFilterGenre = (genre) => {
    const currentGenre = [...filters.genre]
    const index = currentGenre.indexOf(genre)

    currentGenre.splice(index, 1)

    const deletedGenre = {
      ...filters,
      status: true,
      genre: [...currentGenre],
    }

    dispatch(setFilters(deletedGenre))

    if (!deletedGenre.genre.length) {
      dispatch(setFilters({...filters, status: false, genre: ''}))
    }
  }

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        {allGenres?.map((genre, index) =>
          !filters.genre.includes(genre) ? (
            <S.FilterText
              key={`genre-${index}`}
              onClick={() => filterGenre(genre)}
            >
              {genre}
            </S.FilterText>
          ) : (
            <S.FilterTextActive
              key={`genre-${index}`}
              onClick={() => removeFilterGenre(genre)}
            >
              {genre}
            </S.FilterTextActive>
          ),
        )}
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
