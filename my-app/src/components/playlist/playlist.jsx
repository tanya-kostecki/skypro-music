import React from 'react'
import { PlaylistItem } from './playlist-item-component'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component' 
import * as S from './playlist.styles'

const PLaylistAllItems = ({ getTracks, setTrack }) => {
  return (
    <div className="content__playlist-items">
      <PlaylistItem getTracks={getTracks} setTrack={setTrack} />
    </div>
  )
}

export const Playlist = ({ isLoading, getTracks, error, setTrack }) => {
  if (error) {
    return (
      <p style={{ 'font-size': '24px' }}>
        Произошла ошибка, попробуйте позже: {error}
      </p>
    )
  }
  return (
    <S.ContentPlaylist className="playlist">
      {isLoading ? (
        <SkeletonPlaylistItems />
      ) : (
        <PLaylistAllItems getTracks={getTracks} setTrack={setTrack} />
      )}
    </S.ContentPlaylist>
  )
}
