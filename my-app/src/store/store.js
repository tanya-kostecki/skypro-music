import { configureStore } from '@reduxjs/toolkit'
import currentTrackReducer from './reducers/currentTrack'

export const store = configureStore({
    reducer: {
        currentPlay: currentTrackReducer,
    }
})