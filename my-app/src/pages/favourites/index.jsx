import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Favourites = ({ setToken }) => {
  if (localStorage.getItem('token', 'token')) {
    return (
      <div>
        <h1>Favourites page</h1>
      </div>
    )
  } else {
    const navigate = useNavigate()
    
    useEffect(() => {
      setToken(false)
      navigate('/login', { replace: true })
    }, [])
  }
}
