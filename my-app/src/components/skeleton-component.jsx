function Skeleton({ width, height }) {
  const style = {
    width: width,
    height: height,
    backgroundColor: '#313131'
  }
  return <div style={style} />
}

export const SkeletonTrackPlayer = () => {
  return (
    <div className="track-play__contain">
      <div className="track-play__image loading">
        <Skeleton width="51px" height="51px"/>
      </div>
      <div className="track-play__author loading">
        <Skeleton width="59px" height="15px"/>
      </div>
      <div className="track-play__album loading">
        <Skeleton width="59px" height="15px"/>
      </div>
    </div>
  )
}

export const SkeletonSidebarList = () => {
  return (
    <div className="sidebar__list">
      <div className="sidebar__item loading">
        <Skeleton width="250px" height="150px"/>
      </div>
      <div className="sidebar__item loading">
        <Skeleton width="250px" height="150px"/>
      </div>
      <div className="sidebar__item loading">
        <Skeleton width="250px" height="150px"/>
      </div>
    </div>
  )
}

const SkeletonPlaylistItemPattern = () => {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image loading">
            <Skeleton width="51px" height="51px"/>
          </div>
          <div className="track__title-text loading">
            <Skeleton width="356px" height="19px"/>
          </div>
        </div>
        <div className="track__author loading">
          <Skeleton width="271px" height="19px"/>
        </div>
        <div className="track__album loading">
          <Skeleton width="305px" height="19px"/>
        </div>
      </div>
    </div>
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
