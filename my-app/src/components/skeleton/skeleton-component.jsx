import * as S from '../playlist/playlist.styles'
import * as L from './skeleton.styles'
import * as Sidebar from './skeleton.styles'
import { SidebarList } from '../sidebar/sidebar.styles'

//TODO: разделить этот файл на несколько компонентов,
// чтобы без L & Sidebar
function Skeleton({ width, height }) {
  const style = {
    width: width,
    height: height,
    backgroundColor: '#313131',
  }
  return <div style={style} />
}

export const SkeletonTrackPlayer = () => {
  return (
    <div className="track-play__contain">
      <div className="track-play__image loading">
        <Skeleton width="51px" height="51px" />
      </div>
      <div className="track-play__author loading">
        <Skeleton width="59px" height="15px" />
      </div>
      <div className="track-play__album loading">
        <Skeleton width="59px" height="15px" />
      </div>
    </div>
  )
}

export const SkeletonSidebarList = () => {
  return (
    <SidebarList>
      <Sidebar.LoadingSidebarItem>
        <Skeleton width="250px" height="150px" />
      </Sidebar.LoadingSidebarItem>
      <Sidebar.LoadingSidebarItem>
        <Skeleton width="250px" height="150px" />
      </Sidebar.LoadingSidebarItem>
      <Sidebar.LoadingSidebarItem>
        <Skeleton width="250px" height="150px" />
      </Sidebar.LoadingSidebarItem>
    </SidebarList>
  )
}

const SkeletonPlaylistItemPattern = () => {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <L.LoadingTrackTitleImage className="loading">
            <Skeleton width="51px" height="51px" />
          </L.LoadingTrackTitleImage>
          <L.LoadingTrackTitleText>
            <Skeleton width="356px" height="19px" />
          </L.LoadingTrackTitleText>
        </S.TrackTitle>
        <L.LoadingTrackAuthor>
          <Skeleton width="271px" height="19px" />
        </L.LoadingTrackAuthor>
        <L.LoadingTrackAlbum>
          <Skeleton width="305px" height="19px" />
        </L.LoadingTrackAlbum>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export const SkeletonPlaylistItems = () => {
  return (
    <div className="content__playlist-items">
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
    </div>
  )
}
