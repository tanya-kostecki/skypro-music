import * as S from '../playlist/playlist.styles'
import * as L from './skeleton.styles'

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
    <div className="sidebar__list">
      <div className="sidebar__item loading">
        <Skeleton width="250px" height="150px" />
      </div>
      <div className="sidebar__item loading">
        <Skeleton width="250px" height="150px" />
      </div>
      <div className="sidebar__item loading">
        <Skeleton width="250px" height="150px" />
      </div>
    </div>
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
