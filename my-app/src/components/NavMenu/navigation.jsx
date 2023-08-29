import React from 'react'
import * as S from './NavMenu.styles'
import { NavLink } from 'react-router-dom'

export const CreateNavigation = () => {
  const [visible, setVisibility] = React.useState(false)
  const toggleVisibility = () => setVisibility(!visible)

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <a onClick={toggleVisibility}>
        <S.NavBurger>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.NavBurger>
      </a>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <NavLink to="/"><S.MenuLink href="#">Главное</S.MenuLink></NavLink>
              
            </S.MenuItem>
            <S.MenuItem>
              <NavLink to="/favourites"><S.MenuLink href="#">Мой плейлист</S.MenuLink></NavLink>
              
            </S.MenuItem>
            <S.MenuItem>
              <NavLink to="/login"><S.MenuLink href="../signin.html">Выйти</S.MenuLink></NavLink>
              
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
