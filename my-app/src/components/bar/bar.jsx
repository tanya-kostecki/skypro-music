import React from 'react'
import { TrackPlayer } from '../track-player/track-player'
import { PlayerControls } from '../player-controls/player-controls'
import * as S from './bar.styles'

const barVolume = (
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
        />
      </S.VolumeProgress>
    </S.VolumeContent>
  </S.BarVolumeBlock>
)


export function Bar({ isLoading, track }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer className="player">
            {<PlayerControls isLoading={isLoading} />}

            {<TrackPlayer isLoading={isLoading} track={track}/>}
          </S.BarPlayer>
          {barVolume}
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
