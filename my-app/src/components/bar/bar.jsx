import React, { useContext, useEffect } from 'react'
import { TrackPlayer } from '../track-player/track-player'
import { PlayerControls } from '../player-controls/player-controls'
import * as S from './bar.styles'
import { useRef, useState } from 'react'
import ProgressBar from './progress-bar'
import { useSelector, useDispatch } from 'react-redux'
import {
  currentTrackPlayer,
  currentIsPlaying,
  currentTracklistPlayer,
} from '../../store/selectors/currentTrack'
import {
  selectCurrentTrack,
  selectIsPlaying,
} from '../../store/actions/creators/currentTrack'
import { userContext } from '../../context/userContext'

export function Bar({ isLoading }) {
  const track = useSelector(currentTrackPlayer)
  const isPlaying = useSelector(currentIsPlaying)
  const dispatch = useDispatch(selectIsPlaying)


  const [isLoop, setIsLoop] = useState(false)

  const [audioProgress, setAudioProgress] = useState(0)

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef(null)

  const [currentVolume, setCurrentVolume] = useState(1)

  const [shuffle, setShuffle] = useState(false)

  const handleVolume = (event) => {
    audioRef.current.volume = event.target.value
    setCurrentVolume(event.target.value)
  }

  const handleAudioUpdate = () => {
    let totalMinutes = Math.floor(audioRef.current.duration / 60)
    let totalSeconds = Math.floor(audioRef.current.duration % 60)
    let totalLength = `${
      totalMinutes < 10 ? `0${totalMinutes}` : totalMinutes
    } : ${totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds}`
    setDuration(totalLength)

    let currentMin = Math.floor(audioRef.current.currentTime / 60)
    let currentSec = Math.floor(audioRef.current.currentTime % 60)
    let currentPlay = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`
    setCurrentTime(currentPlay)

    const progress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    setAudioProgress(isNaN(progress) ? 0 : progress)
  }

  const token = useContext(userContext)

  const handleStart = () => {
    if (localStorage.getItem('token', token)) {
      dispatch(selectIsPlaying(true))
      audioRef.current?.play()
    }
  }

  useEffect(handleStart, [track])

  const tracklist = useSelector(currentTracklistPlayer)

  const handleShuffle = () => {
    let randomIndex = Math.floor(Math.random() * (tracklist.length - 1))
    return randomIndex
  }

  const trackIndex = tracklist.indexOf(track)
  const handleNextTrack = () => {
    if (track) {
      if (trackIndex < tracklist.length - 1 && !shuffle) {
        const nextTrack = tracklist[trackIndex + 1]
        dispatch(selectCurrentTrack(nextTrack))
      }

      if (shuffle) {
        let randomTrackIndex = handleShuffle()
        let randomTrack = tracklist[randomTrackIndex]
        dispatch(selectCurrentTrack(randomTrack))
      }
    }
  }

  const endTrack = () => {
    if (!isLoop) {
      handleNextTrack()
    }
    if (trackIndex === tracklist.length - 1) {
        dispatch(selectIsPlaying(false))
      }
  }

  return (
    track.id && (
      <S.Bar>
        <div
          className="musicTimerDiv"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0 20px 0 20px',
          }}
        >
          <p className="musicCurrentTime">{currentTime}</p>
          <p className="musicTotalLength">{`/ ${duration}`}</p>
        </div>
        <audio
          controls
          src={track.track_file}
          ref={audioRef}
          style={{ display: 'none' }}
          onTimeUpdate={handleAudioUpdate}
          onEnded={endTrack}
        >
          <source src={track.track_file} type="audio/mpeg" />
        </audio>
        <S.BarContent>
          <ProgressBar
            audioRef={audioRef}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            setAudioProgress={setAudioProgress}
            audioProgress={audioProgress}
          />
          <S.BarPlayerBlock>
            <S.BarPlayer className="player">
              <PlayerControls
                isLoading={isLoading}
                isPlaying={isPlaying}
                audioRef={audioRef}
                isLoop={isLoop}
                setIsLoop={setIsLoop}
                handleStart={handleStart}
                handleNextTrack={handleNextTrack}
                handleShuffle={handleShuffle}
                shuffle={shuffle}
                setShuffle={setShuffle}
              />
              <TrackPlayer isLoading={isLoading} track={track} />
            </S.BarPlayer>
            <S.BarVolumeBlock className="volume">
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress className="_btn">
                  <S.VolumeProgressLine
                    className="_btn"
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    value={currentVolume}
                    step={0.1}
                    onChange={handleVolume}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
  )
}
