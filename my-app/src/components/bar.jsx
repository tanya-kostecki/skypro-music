import React from 'react'
import { TrackPlayer } from './track-player/track-player'
import { PlayerControls } from './player-controls/player-controls'

const barVolume = (
  <div className="bar__volume-block volume">
    <div className="volume__content">
      <div className="volume__image">
        <svg className="volume__svg" alt="volume">
          <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
        </svg>
      </div>
      <div className="volume__progress _btn">
        <input
          className="volume__progress-line _btn"
          type="range"
          name="range"
        />
      </div>
    </div>
  </div>
)

export function Bar({ isLoading }) {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            {<PlayerControls isLoading={isLoading} />}

            {<TrackPlayer isLoading={isLoading} />}
          </div>
          {barVolume}
        </div>
      </div>
    </div>
  )
}
