import React from 'react'
import * as S from './NavMenu.styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const CreateNavigation = ({ setToken }) => {
  const [visible, setVisibility] = useState(false)
  const toggleVisibility = () => setVisibility(!visible)

  const handleLogOut = () => {
    localStorage.removeItem('token', 'token')
    setToken(false)
   
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <Link to="/">
                <S.MenuLink href="#">Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/favourites">
                <S.MenuLink href="#">Мой плейлист</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/login">
                <S.MenuLink href="../signin.html" onClick={handleLogOut}>
                  Выйти
                </S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
