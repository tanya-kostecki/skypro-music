import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../api/trackApi'

const accessToken = () => {
  const accessToken = JSON.parse(localStorage.getItem('token'))
  if(!accessToken) {
    return
  }
  return accessToken.token.access
}

export const playlistApi = createApi({
    reducerPath: 'playlistApi',
    baseQuery: fetchBaseQuery ({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query:() => ({
                url: 'catalog/track/all/',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken()}`,
                }
            })
        }),

        getFavouriteTracks: builder.query({
            query:() => ({
                url: 'catalog/track/favorite/all/',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken()}`,
                }
            })
        })
    })
})

export const { useGetFavouriteTracksQuery, useGetAllTracksQuery } = playlistApi