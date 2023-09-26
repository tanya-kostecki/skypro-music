import { useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { userContext } from '../../context/userContext'

export const Favourites = () => {
  const {token, setToken} = useContext(userContext) 
  if (localStorage.getItem('token', token)) {
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
