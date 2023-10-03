const currentPlaySelector = (store) => store.currentPlay

export const currentTrackPlayer = (store) => currentPlaySelector(store)?.track || []

export const currentIsPlaying = (store) => currentPlaySelector(store)?.isPlaying

export const currentTracklistPlayer = (store) => currentPlaySelector(store)?.tracklist || []