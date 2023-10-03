import React from 'react'
import { PlaylistItem } from './playlist-item-component'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component' 
import * as S from './playlist.styles'

const PLaylistAllItems = () => {//setTrack
  return (
    <div className="content__playlist-items">
      <PlaylistItem/>
    </div> //setTrack={setTrack}
  )
}

export const Playlist = ({ isLoading, error }) => { //setTrack
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
        <PLaylistAllItems /> //setTrack={setTrack}
      )}
    </S.ContentPlaylist>
  )
}
