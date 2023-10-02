import { SET_CURRENT_TRACK } from '../types/currentTrack'

export const selectCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: track,
})
