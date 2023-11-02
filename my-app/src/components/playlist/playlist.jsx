import React from 'react'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component'
import * as S from './playlist.styles'

import { PlaylistItem } from './playlist-item'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentPlaylistSelector,
  filteredPlaylistSelector,
  filtersSelector,
  selectIsLoading,
} from '../../store/selectors/selectors'
import {
  useGetAllTracksQuery,
  useGetFavouriteTracksQuery,
} from '../../services/playlists'

import {
  setIsLoading,
  setCurrentPlaylist,
  setFilteredPlaylist,
} from '../../store/slices/trackSlice' //

export const Playlist = ({ tracks }) => {
  const { isFetching } = useGetAllTracksQuery()
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  const secondsToMinutes = (sec) => {
    const min = Math.trunc(sec / 60) + ''
    sec = (sec % 60) + ''
    return min.padStart(2, 0) + ':' + sec.padStart(2, 0)
  }

  const filteredPlaylist = useSelector(filteredPlaylistSelector)
  const filters = useSelector(filtersSelector)

  useEffect(() => {
    if (tracks) {
      let newFilteredPlaylist = [...tracks]
      if (filters.searchValue.length) {
        newFilteredPlaylist = [
          ...tracks.filter(
            (track) =>
              track.name
                .toLowerCase()
                .includes(filters.searchValue.toLowerCase()) ||
              track.author
                .toLowerCase()
                .includes(filters.searchValue.toLowerCase()),
          ),
        ]
      }
      dispatch(setFilteredPlaylist(newFilteredPlaylist))
    }
  }, [filters, tracks])

  return (
    <S.ContentPlaylist className="playlist">
      {filters.status ? (
        filteredPlaylist?.map((track) => (
          <PlaylistItem
            track={track}
            key={track.id}
            title={track.name}
            link={track.track_file}
            author={track.author}
            authorLink={track.authorLink}
            album={track.album}
            albumLink={track.albumLink}
            time={secondsToMinutes(track.duration_in_seconds)}
          />
        ))
      ) : (
        <div className="content__playlist-items">
          {isLoading && isFetching ? (
            <SkeletonPlaylistItems />
          ) : (
            tracks?.map((track) => (
              <PlaylistItem
                track={track}
                key={track.id}
                title={track.name}
                link={track.track_file}
                author={track.author}
                authorLink={track.authorLink}
                album={track.album}
                albumLink={track.albumLink}
                time={secondsToMinutes(track.duration_in_seconds)}
              />
            ))
          )}
        </div>
      )}
    </S.ContentPlaylist>
  )
}

