import { Link } from "react-router-dom"
import { SecMusics, MainMusics } from "../styles"
import { useSelector } from "react-redux"
import { GlobalStateType } from "../services/types"

function MusicsRuyTunes() {
  const {ruyTunes: {Album}} = useSelector((state:GlobalStateType) => state)
  return (
    <MainMusics>
      { Album.map((e) => (
        <SecMusics>
          <Link to={`album/${e.artistId}`}>
            <h2>{`${e.collectionName}`}</h2>
            <img src={e.artworkUrl100} alt={`art for ${e.collectionName}`} />
            <h3>
              <p> {`Artista: ${e.artistName}`} </p>
              <p> {`Tamanho: ${e.trackCount} ${e.trackCount === 1 ? 'musica' : 'musicas'}`} </p>
            </h3>
        </Link>
        </SecMusics>
      ))} 
    </MainMusics>
  )
}

export default MusicsRuyTunes
