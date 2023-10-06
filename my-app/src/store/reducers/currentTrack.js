import { SET_CURRENT_TRACK, SET_IS_PLAYING, SET_CURRENT_TRACKLIST } from '../actions/types/currentTrack'

const initialState = {
  track: {},
  tracklist: [],
  isPlaying: false
}

export default function currentTrackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      return {
        ...state,
        track: action.payload,
      }
    }
    case SET_IS_PLAYING: {
      return {
        ...state,
        isPlaying: action.payload,
      }
    }
    case SET_CURRENT_TRACKLIST: {
      return {
        ...state,
        tracklist: action.payload,
      }
    }
    default: return state
  }
}



