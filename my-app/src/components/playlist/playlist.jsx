import React from 'react'
import { PlaylistItem } from './playlist-item-component'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component' 
import * as S from './playlist.styles'

const PLaylistAllItems = ({ tracks }) => {
  return (
    <div className="content__playlist-items">
      <PlaylistItem tracks={tracks}/>
    </div>
  )
}

export const Playlist = ({ isLoading }) => {
  return (
    <S.ContentPlaylist className="playlist">
      {isLoading ? <SkeletonPlaylistItems /> : <PLaylistAllItems />}
    </S.ContentPlaylist>
  )
}
