import React, { useEffect } from 'react'
import * as S from './player-controls.styles'

export function PlayerControls({
  isPlaying,
  setIsPlaying,
  audioRef,
  isLoop,
  setIsLoop,
  handleStart
}) {

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
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

  const notReady = () => {
    audioRef.current.pause()
    setIsPlaying(false)
    alert('Еще не реализовано')
  }

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <S.PlayerBtnPrevSvg alt="prev" onClick={notReady}>
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
      <S.PlayerBtnNext onClick={notReady}>
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
      <S.PlayerBtnShuffle className="_btn-icon" onClick={notReady}>
        <S.PlayerBtnShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
