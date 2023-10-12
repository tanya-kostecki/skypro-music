import React from 'react'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component'
import * as S from './playlist.styles'

import { PlaylistItem } from './playlist-item'

import { useSelector } from 'react-redux'
import { currentTracklistPlayer } from '../../store/selectors/currentTrack'

export const Playlist = ({ isLoading, error }) => {
  //TODO: один компонент для всех плейлистов
  const tracklist = useSelector(currentTracklistPlayer)

  const secondsToMinutes = (sec) => {
    const min = Math.trunc(sec / 60) + ''
    sec = (sec % 60) + ''
    return min.padStart(2, 0) + ':' + sec.padStart(2, 0)
  }

  //TODO: обработка ошибок проблемы с отображением верстки
  if (error) {
    return (
      <p style={{ 'font-size': '24px' }}>
        Произошла ошибка, попробуйте позже: {error}
      </p>
    )
  }
  return (
    <S.ContentPlaylist className="playlist">
      <div className="content__playlist-items">
        {isLoading ? (
          <SkeletonPlaylistItems />
        ) : (
          tracklist?.map((track) => (
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

