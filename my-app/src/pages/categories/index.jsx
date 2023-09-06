import { useParams } from "react-router-dom"
import { PLAYLISTS } from "../../sidebar-constants"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

export const Category = ({ setToken }) => {
    const params = useParams()

    if (localStorage.getItem('token', 'token')) {
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
