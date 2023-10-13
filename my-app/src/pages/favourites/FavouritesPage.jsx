import { useContext, useEffect } from 'react'
import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import * as S from '../main/layout.styles'
import { userContext } from '../../context/userContext'
import { selectCurrentTrack, selectIsPlaying } from '../../store/actions/creators/currentTrack'
import { useDispatch } from 'react-redux'
import { PlaylistItem } from '../../components/playlist/playlist-item'
import { useGetFavouriteTracksQuery } from '../../services/playlists'
import { ContentPlaylist } from '../../components/playlist/playlist.styles'

export const FavouritesPage = ({ isLoading, error }) => {
  const {token, setToken} = useContext(userContext)
  const dispatch = useDispatch()

  const { data } = useGetFavouriteTracksQuery()

  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>Мои Треки</S.CenterblockH2>
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />

          <ContentPlaylist className="playlist">
            <div className="content__playlist-items">
              {
                data?.map((track) => (
                  <PlaylistItem
                    track={track}
                    key={track.id}
                    title={track.name}
                    link={track.track_file}
                    author={track.author}
                    authorLink={track.authorLink}
                    album={track.album}
                    albumLink={track.albumLink}
                    time={track.duration_in_seconds}
                  />
                ))
              }
            </div>
          </ContentPlaylist>
        </S.CenterblockContent>
      </div>
    )
  } else {
    useEffect(() => {
      setToken(false)
      dispatch(selectCurrentTrack({}))
      dispatch(selectIsPlaying(false))
    }, [])
  }
}
