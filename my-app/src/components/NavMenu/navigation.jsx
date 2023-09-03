import React from 'react'
import * as S from './NavMenu.styles'
import { Link } from 'react-router-dom'

export const CreateNavigation = () => {
  const [visible, setVisibility] = React.useState(false)
  const toggleVisibility = () => setVisibility(!visible)

  const handleLogOut = () => {
    localStorage.removeItem('token', 'token')
   
    // window.location.reload()
  }

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
            <Link to="/"><S.MenuLink href="#">Главное</S.MenuLink></Link>
              
            </S.MenuItem>
            <S.MenuItem>
            <Link to="/favourites"><S.MenuLink href="#">Мой плейлист</S.MenuLink></Link>
              
            </S.MenuItem>
            <S.MenuItem>
            <Link to="/login"><S.MenuLink href="../signin.html" onClick={handleLogOut}>Выйти</S.MenuLink></Link>
  
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
