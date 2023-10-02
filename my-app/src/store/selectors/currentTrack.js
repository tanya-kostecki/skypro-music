const currentTrackSelector = (store) => store.currentTrack 

export const currentTrackPlayer = (store) => currentTrackSelector(store)?.track || []

export const currentIsPlaying = (store) => currentTrackSelector(store)?.isPlaying