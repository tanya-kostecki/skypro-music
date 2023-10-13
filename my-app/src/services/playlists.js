import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../api/trackApi'

const accessToken = localStorage.getItem('token')
console.log(accessToken)

export const playlistApi = createApi({
    reducerPath: 'playlistApi',
    baseQuery: fetchBaseQuery ({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getFavouriteTracks: builder.query({
            query:() => ({
                url: 'catalog/track/favorite/all/',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,

                }
            })
        })
    })
})

export const { useGetFavouriteTracksQuery } = playlistApi