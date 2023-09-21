import React, { useEffect } from 'react'
import { TrackPlayer } from '../track-player/track-player'
import { PlayerControls } from '../player-controls/player-controls'
import * as S from './bar.styles'
import { useRef, useState } from 'react'
import ProgressBar from './progress-bar'

export function Bar({ isLoading, track }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoop, setIsLoop] = useState(false)

  const [audioProgress, setAudioProgress] = useState(0)

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef(null)

  const [currentVolume, setCurrentVolume] = useState(1)


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

    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
    setAudioProgress(isNaN(progress) ? 0 : progress)
  }

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  useEffect(handleStart, [track])

  const endTrack = () => {
    if (!isLoop) {
      setIsPlaying(false)
    }
  }

  return (
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
          <S.BarPlayer className="player" >
            <PlayerControls
              isLoading={isLoading}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
              isLoop={isLoop}
              setIsLoop={setIsLoop}
              handleStart={handleStart}
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
}
