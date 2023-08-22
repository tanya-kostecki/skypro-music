import { styled, keyframes } from 'styled-components'
import {
  TrackTitleImage,
  TrackAuthor,
  TrackAlbum,
} from '../playlist/playlist.styles'
import { SidebarItem } from '../sidebar/sidebar.styles'

export const animation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`

export const LoadingTrackTitleImage = styled(TrackTitleImage)`
  animation: skeleton 1s infinite alternate;
`

export const LoadingTrackTitleText = styled.div`
  animation: skeleton 1s infinite alternate;
`

export const LoadingTrackAuthor = styled(TrackAuthor)`
  animation: skeleton 1s infinite alternate;
`

export const LoadingTrackAlbum = styled(TrackAlbum)`
  animation: skeleton 1s infinite alternate;
`
//
export const LoadingSidebarItem = styled(SidebarItem)`
  animation: skeleton 1s infinite alternate;
`
