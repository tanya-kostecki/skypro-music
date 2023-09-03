import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { LoginBlock, RegisterLink } from './index.styles'

export const Login = ({ setToken }) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('token', 'token')
    setToken(true)
    navigate('/', { replace: true })
  }

  return (
    <LoginBlock>
      <h1>Login page</h1>
      <button onClick={handleLogin}>Войти</button>
      <Link to="/register">
        <RegisterLink>Зарегистироваться</RegisterLink>
      </Link>
    </LoginBlock>
  )
}
