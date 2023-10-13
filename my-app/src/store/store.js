import { configureStore } from '@reduxjs/toolkit'
import currentTrackReducer from './reducers/currentTrack'
import { playlistApi } from '../services/playlists'

export const store = configureStore({
    reducer: {
        currentPlay: currentTrackReducer,
        [playlistApi.reducerPath]: playlistApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playlistApi.middleware),
})