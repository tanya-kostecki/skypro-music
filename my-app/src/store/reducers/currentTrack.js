import { SET_CURRENT_TRACK, SET_IS_PLAYING } from '../actions/types/currentTrack'

const initialState = {
  track: {},
  isPlaying: true
}

export default function currentTrackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      return {
        ...state,
        isPlaying: !state.isPlaying,
        track: action.payload,
      }
    }
    case SET_IS_PLAYING: {
      return {
        ...state,
        isPlaying: action.payload,
      }
    }
    default: return state
  }
}



