import React from 'react'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component'
import * as S from './playlist.styles'

import { PlaylistItem } from './playlist-item'

import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading } from '../../store/selectors/selectors'
import { useGetAllTracksQuery } from '../../services/playlists'

export const Playlist = ({ tracks }) => {
  const { isFetching } = useGetAllTracksQuery()

  const secondsToMinutes = (sec) => {
    const min = Math.trunc(sec / 60) + ''
    sec = (sec % 60) + ''
    return min.padStart(2, 0) + ':' + sec.padStart(2, 0)
  }

  return (
    <S.ContentPlaylist className="playlist">
      <div className="content__playlist-items">
        {isFetching ? (
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
    </S.ContentPlaylist>
  )
}

