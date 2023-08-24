import React from 'react'
import { SkeletonSidebarList } from '../skeleton/skeleton-sidebar'
import * as S from './sidebar.styles'

const SidebarListLoaded = () => {
  return (
    <S.SidebarList>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImage
            src="img/playlist01.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImage
            src="img/playlist02.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImage
            src="img/playlist03.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    </S.SidebarList>
  )
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
