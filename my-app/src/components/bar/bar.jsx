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

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef(null)

  const [currentVolume, setCurrentVolume] = useState(1)

  const handleVolume = (event) => {
    audioRef.current.volume = event.target.value
    setCurrentVolume(event.target.value)
  }

  const handleAudioUpdate = () => {
    const progress = parseInt(
      (audioRef.current.currentTime / audioRef.current.duration) * 100,
    )
    setAudioProgress(isNaN(progress) ? 0 : progress)
  }

  return (
    <S.Bar>
      <audio
        controls
        ref={audioRef}
        style={{ display: 'none' }}
        onTimeUpdate={handleAudioUpdate}
      >
        <source src={track.track_file} type="audio/mpeg" />
      </audio>
      <S.BarContent>
        <ProgressBar
          audioRef={audioRef}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          duration={duration}
          setDuration={setDuration}
          setAudioProgress={setAudioProgress}
          audioProgress={audioProgress}
        />
        {/* <S.BarPlayerProgress></S.BarPlayerProgress> */}
        <S.BarPlayerBlock>
          <S.BarPlayer className="player">
            <PlayerControls
              isLoading={isLoading}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
              isLoop={isLoop}
              setIsLoop={setIsLoop}
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
