import { useParams } from "react-router-dom"
import { PLAYLISTS } from "../../sidebar-constants"
import { useNavigate } from 'react-router-dom'
import { useEffect, useContext } from "react"
import { userContext } from '../../context/userContext'

export const Category = () => {
    const params = useParams()
    const {token, setToken} = useContext(userContext)

    if (localStorage.getItem('token', token)) {
      const playlist = PLAYLISTS.find(
        (playlist) => playlist.id === Number(params.id),
      )
      return (
        <div>
          <h1>Category page{playlist.id}</h1>
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
