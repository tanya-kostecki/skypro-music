import React, { useContext } from 'react'
import { SkeletonSidebarList } from '../skeleton/skeleton-sidebar'
import * as S from './sidebar.styles'
import { PLAYLISTS } from '../../sidebar-constants'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectCurrentTrack, selectIsPlaying } from '../../store/actions/creators/currentTrack'
import { useGetAllTracksQuery } from '../../services/playlists'

const CategoryItems = ({ playlists }) => {
  return (
    <S.SidebarList>
      {playlists.map((playlist) => (
        <S.SidebarItem key={playlist.id}>
          <Link to={`/category/${playlist.id}`}>
            <S.SidebarLink href={playlist.href}>
              <S.SidebarImage src={playlist.src} alt={playlist.alt} />
            </S.SidebarLink>
          </Link>
        </S.SidebarItem>
      ))}
    </S.SidebarList>
  )
}

const SidebarListLoaded = () => {
  return <CategoryItems playlists={PLAYLISTS}></CategoryItems>
}

export function Sidebar({ isLoading }) {
  const { setToken } = useContext(userContext)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isFetching } = useGetAllTracksQuery()
  
  const handleLogoutBtn = () => {
    localStorage.clear()
    setToken(false)
    dispatch(selectCurrentTrack({}))
    dispatch(selectIsPlaying(false))
    navigate('/login')
  }

  return (
    <S.MainSidebar>
      <S.SideBarPersonal>
        <S.SidebarPersonalName>
          {isFetching ? '' : null}
        </S.SidebarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout" onClick={handleLogoutBtn}>
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SidebarBlock>
        {isFetching ? <SkeletonSidebarList /> : <SidebarListLoaded />}
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
