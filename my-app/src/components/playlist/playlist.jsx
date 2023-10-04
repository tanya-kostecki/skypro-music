import React from 'react'
import { PlaylistItem } from './playlist-item-component'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component' 
import * as S from './playlist.styles'

const PLaylistAllItems = () => {
  return (
    <div className="content__playlist-items">
      <PlaylistItem/>
    </div>
  )
}

export const Playlist = ({ isLoading, error }) => {
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
        <PLaylistAllItems />
      )}
    </S.ContentPlaylist>
  )
}
