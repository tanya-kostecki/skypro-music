import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../api/trackApi'
import { useContext } from 'react'
import { userContext } from '../context/userContext'

const accessToken = () => {
  const accessToken = JSON.parse(localStorage.getItem('token'))
  return accessToken.token.access
}

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
                    Authorization: `Bearer ${accessToken()}`,
                }
            })
        })
    })
})

export const { useGetFavouriteTracksQuery } = playlistApi