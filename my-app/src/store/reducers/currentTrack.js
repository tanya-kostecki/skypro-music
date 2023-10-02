import { SET_CURRENT_TRACK } from '../actions/types/currentTrack'

const initialState = {
  track: {},
}

export default function currentTrackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      return {
        ...state,
        track: action.payload,
      }
    }
    default: return state
  }
}
