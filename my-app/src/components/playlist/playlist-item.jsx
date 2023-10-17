import React from 'react'
import * as S from './playlist.styles'

import { useDispatch, useSelector } from 'react-redux'
import {
  selectIsPlaying,
  currentPlaylistSelector,
  currentTrackSelector,
} from '../../store/selectors/selectors'
import { setCurrentTrack } from '../../store/slices/trackSlice'

export const PlaylistItem = ({ track, album, author, link, title, albumLink, authorLink, titleSpan, time }) => {
  const dispatch = useDispatch()

  const isPlaying = useSelector(selectIsPlaying)
  const currentTrack  = useSelector(currentTrackSelector)

  const showPlayer = (track) => {
    dispatch(setCurrentTrack(track))
  }

  // const secondsToMinutes = (sec) => {
  //   const min = Math.trunc(sec / 60) + ''
  //   sec = (sec % 60) + ''
  //   return min.padStart(2, 0) + ':' + sec.padStart(2, 0)
  // }

  return (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTrack onClick={() => showPlayer(track)}>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack.id === track.id && (
              <S.TrackTitleAnimation
                $isPlaying={isPlaying}
              ></S.TrackTitleAnimation>
            )}
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div className="track__title-text">
            <S.TrackTitleLink href={link}>
              {title}
              <S.TrackTitleSpan>{titleSpan}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href={authorLink}>
            {author}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href={albumLink}>
            {album}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText className="track__time-text">
            {time}
          </S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
