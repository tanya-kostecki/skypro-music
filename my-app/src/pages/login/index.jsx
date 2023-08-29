import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Login = ({ setToken }) => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/", { replace: true })
        setToken(true)
    }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleLogin}>Войти</button>
      <Link to="/register">Зарегистироваться</Link>
    </div>
  )
}
