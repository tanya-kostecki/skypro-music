import React from 'react'
import { SkeletonTrackPlayer } from '../skeleton/skeleton-trackplayer'
import *as S from './track-player.styles'

const TrackPlayerLoaded = () => {
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </S.TrackPlaySvg>
      </S.TrackPlayImage>
      <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink href="http://">
          Ты та...
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum>
        <S.TrackPlayAlbumLink href="http://">
          Баста
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  )
}

export function TrackPlayer({ isLoading }) {
  return (
    <S.PlayerTrackPlay className="track-play">
      {isLoading ? <SkeletonTrackPlayer /> : <TrackPlayerLoaded />}
      <S.TrackPlayLikeDis>
        <S.TrackPlayLikeBtn className="_btn-icon">
          <S.TrackPlayLikeSvg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLikeBtn>
        <S.TrackPlayDislikeBtn className="_btn-icon">
          <S.TrackPlayDislikeSvg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislikeBtn>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}