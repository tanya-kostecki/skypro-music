import React from 'react'
import { SkeletonSidebarList } from '../skeleton/skeleton-sidebar'
import * as S from './sidebar.styles'
import { PLAYLISTS } from '../../sidebar-constants'
import { Link } from 'react-router-dom'

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
  return (
    <S.MainSidebar>
      <S.SideBarPersonal>
        <S.SidebarPersonalName>
          {isLoading ? '' : 'Sergey.Ivanov'}
        </S.SidebarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SidebarBlock>
        {isLoading ? <SkeletonSidebarList /> : <SidebarListLoaded />}
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
