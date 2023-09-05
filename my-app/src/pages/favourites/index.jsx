import { useNavigate } from 'react-router-dom'

export const Favourites = ({ setToken }) => {
  if (localStorage.getItem('token', 'token')) {
    return (
      <div>
        <h1>Favourites page</h1>
      </div>
    )
  } else {
    const navigate = useNavigate()
    navigate('/login', { replace: true })
    setToken(false)
  }
}
