import React from 'react'
import { PlaylistItem } from './playlist-item-component'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component' 
import * as S from './playlist.styles'

const PLaylistAllItems = ({ setTrack }) => { //getTracks
  return (
    <div className="content__playlist-items">
      <PlaylistItem setTrack={setTrack}/>
    </div> //getTracks={getTracks}
  )
}

export const Playlist = ({ isLoading, error, setTrack }) => { //getTracks
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
        <PLaylistAllItems setTrack={setTrack}/> //getTracks={getTracks}
      )}
    </S.ContentPlaylist>
  )
}
