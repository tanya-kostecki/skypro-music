import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTracks: [],
  currentTrack: {},
  currentPlaylist: [],
  isPlaying: false,
  isLoading: false,
}

export const trackSlice = createSlice({
  name: 'Track',
  initialState,
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },


    setCurrentPlaylist : (state, action) => {
      state.currentPlaylist = action.payload
    },
    setFavourites: (state, action) => {
      state.currentPlaylist = action.payload
    },
  }
})

export const { setAllTracks, setCurrentTrack, setIsLoading, setIsPlaying, setFavourites, setCurrentPlaylist } = trackSlice.actions
export default trackSlice.reducer

