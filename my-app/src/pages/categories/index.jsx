import { useParams } from "react-router-dom"
import { PLAYLISTS } from "../../sidebar-constants"

export const Category = () => {
    const params = useParams()

    const playlist = PLAYLISTS.find((playlist) => playlist.id === Number(params.id))
    return (
        <div>
            <h1>Category page{playlist.id}</h1>
        </div>
    )
}
