import React, { useState } from 'react'
import * as S from './player-controls.styles'
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentTrack,
  selectIsPlaying,
} from '../../store/actions/creators/currentTrack'
import {
  currentTrackPlayer,
  currentTracklistPlayer,
} from '../../store/selectors/currentTrack'

export function PlayerControls({
  isPlaying,
  audioRef,
  isLoop,
  setIsLoop,
  handleStart,
  handleNextTrack,
  handleShuffle,
  shuffle,
  setShuffle,
}) {
  // const [shuffle, setShuffle] = useState(false)

  const dispatch = useDispatch()

  const handleStop = () => {
    audioRef.current.pause()
    dispatch(selectIsPlaying(false))
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  const handleLoop = () => {
    audioRef.current.loop = true
    setIsLoop(true)
  }

  const handleStopLoop = () => {
    audioRef.current.loop = false
    setIsLoop(false)
  }

  const toggleLoop = isLoop ? handleStopLoop : handleLoop

  const track = useSelector(currentTrackPlayer)
  const tracklist = useSelector(currentTracklistPlayer)

  const handlePrevTrack = (prevTrack) => {
    if (track) {
      const trackIndex = tracklist.indexOf(track)
      if (trackIndex < tracklist.length - 1 && trackIndex > 0 && !shuffle) {
        prevTrack = tracklist[trackIndex - 1]
        dispatch(selectCurrentTrack(prevTrack))
      } 
      if(shuffle) {
        let randomTrackIndex = handleShuffle()
        let randomTrack = tracklist[randomTrackIndex]
        dispatch(selectCurrentTrack(randomTrack))
      }
    }
  }

  const toggleShuffle = () => shuffle ? setShuffle(false) : setShuffle(true)
  

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <S.PlayerBtnPrevSvg alt="prev" onClick={handlePrevTrack}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay className="_btn" onClick={togglePlay}>
        <S.PlayerBtnPlaySvg alt="play">
          {isPlaying ? (
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="5" height="19" fill="#D9D9D9" />
              <rect x="10" width="5" height="19" fill="#D9D9D9" />
            </svg>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          )}
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext onClick={handleNextTrack}>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat className="_btn-icon" onClick={toggleLoop}>
        {isLoop ? (
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
              fill="white"
            />
            <path
              d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
              fill="white"
            />
          </svg>
        ) : (
          <S.PlayerBtnRepeatSvg alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </S.PlayerBtnRepeatSvg>
        )}
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle className="_btn-icon" onClick={toggleShuffle}>
        {shuffle ? (
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 15L14.5 12.1132V17.8868L19.5 15ZM10.1632 12.0833L9.70863 12.2916L10.1632 12.0833ZM7.33683 5.91673L6.8823 6.12505L7.33683 5.91673ZM0.5 3.5H2.79151V2.5H0.5V3.5ZM6.8823 6.12505L9.70863 12.2916L10.6177 11.8749L7.79137 5.7084L6.8823 6.12505ZM14.7085 15.5H15V14.5H14.7085V15.5ZM9.70863 12.2916C10.6047 14.2466 12.5579 15.5 14.7085 15.5V14.5C12.949 14.5 11.3508 13.4745 10.6177 11.8749L9.70863 12.2916ZM2.79151 3.5C4.55105 3.5 6.14918 4.52552 6.8823 6.12505L7.79137 5.7084C6.89533 3.75341 4.94205 2.5 2.79151 2.5V3.5Z"
              fill="#696969"
            />
            <path
              d="M19.5 3L14.5 5.88675V0.113249L19.5 3ZM10.1632 5.91673L9.70863 5.7084L10.1632 5.91673ZM7.33683 12.0833L6.8823 11.8749L7.33683 12.0833ZM0.5 14.5H2.79151V15.5H0.5V14.5ZM6.8823 11.8749L9.70863 5.7084L10.6177 6.12505L7.79137 12.2916L6.8823 11.8749ZM14.7085 2.5H15V3.5H14.7085V2.5ZM9.70863 5.7084C10.6047 3.75341 12.5579 2.5 14.7085 2.5V3.5C12.949 3.5 11.3508 4.52552 10.6177 6.12505L9.70863 5.7084ZM2.79151 14.5C4.55105 14.5 6.14918 13.4745 6.8823 11.8749L7.79137 12.2916C6.89533 14.2466 4.94205 15.5 2.79151 15.5V14.5Z"
              fill="#696969"
            />
          </svg>
        ) : (
          <S.PlayerBtnShuffleSvg alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </S.PlayerBtnShuffleSvg>
        )}
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
