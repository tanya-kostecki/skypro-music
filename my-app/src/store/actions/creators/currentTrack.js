import { SET_CURRENT_TRACK, SET_IS_PLAYING } from '../types/currentTrack'

export const selectCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: track,
})

export const selectIsPlaying = (isPlaying) => ({
  type: SET_IS_PLAYING,
  payload: isPlaying, 
})


