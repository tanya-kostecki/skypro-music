import React from 'react'
import { PlaylistItem } from './playlist-item-component'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component' 
import * as S from './playlist.styles'

const PLaylistAllItems = () => {
  return (
    <div className="content__playlist-items">
      <PlaylistItem
        track={{
          title: 'Guilt',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'Nero',
          albumLink: 'http://',
          album: 'Welcome Reality',
          time: '4:44',
        }}
      />

      <PlaylistItem
        track={{
          title: 'Elektro',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'Dynoro, Outwork, Mr. Gee',
          albumLink: 'http://',
          album: 'Elektro',
          time: '2:22',
        }}
      />

      <PlaylistItem
        track={{
          title: "I'm fire",
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'Ali Backgor',
          albumLink: 'http://',
          album: "I'm fire",
          time: '2:22',
        }}
      />

      <PlaylistItem
        track={{
          title: 'Non Stop',
          titleSpan: '(Remix)',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'Стоункат, Psychopath',
          albumLink: 'http://',
          album: 'Non Stop',
          time: '4:12',
        }}
      />

      <PlaylistItem
        track={{
          title: 'Run Run',
          titleSpan: '(feat. AR/CO)',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'Jaded, Will Clarke, AR/CO',
          albumLink: 'http://',
          album: 'Run Run',
          time: '2:54',
        }}
      />

      <PlaylistItem
        track={{
          title: 'Eyes on Fire',
          titleSpan: '(Zeds Dead Remix)',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'Blue Fountain, Zeds Dead',
          albumLink: 'http://',
          album: 'Eyes on Fire',
          time: '5:20',
        }}
      />

      <PlaylistItem
        track={{
          title: 'Mucho Bien',
          titleSpan: '(Hi Profile Remix)',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
          albumLink: 'http://',
          album: 'Mucho Bien',
          time: '3:41',
        }}
      />

      <PlaylistItem
        track={{
          title: 'Knives in Cherries',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'minthaze',
          albumLink: 'http://',
          album: 'Captivating',
          time: '1:48',
        }}
      />

      <PlaylistItem
        track={{
          title: 'How Deep Is Your Love',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'Calvin Harris, Disciples',
          albumLink: 'http://',
          album: 'How Deep Is Your Love',
          time: '3:32',
        }}
      />

      <PlaylistItem
        track={{
          title: 'Morena',
          titleLink: 'http://',
          authorLink: 'http://',
          author: 'Tom Boxer',
          albumLink: 'http://',
          album: 'Soundz Made in Romania',
          time: '3:36',
        }}
      />
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
