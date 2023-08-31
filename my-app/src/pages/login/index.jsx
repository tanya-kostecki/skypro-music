import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { LoginBlock, RegisterLink } from './index.styles'

export const Login = ({ setToken }) => {
  const navigate = useNavigate()

  const handleLogin = (token) => {
    localStorage.setItem('token', token)
    navigate('/', { replace: true })
    setToken(true)
  }

  return (
    <LoginBlock>
      <h1>Login page</h1>
      <button onClick={handleLogin}>Войти</button>
      <NavLink to="/register">
        <RegisterLink>Зарегистироваться</RegisterLink>
      </NavLink>
    </LoginBlock>
  )
}
