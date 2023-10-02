const currentTrackSelector = (store) => store.track

export const currentTrackPlayer = (store) => currentTrackSelector(store)?.track || []