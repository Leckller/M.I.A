import { Link } from "react-router-dom"
import { AlbumType } from "../services/types"
import { SecMusics, MainMusics } from "../styles"

function MusicsRuyTunes({musics}: {musics: AlbumType[]}) {
  return (
    <MainMusics>
      { musics.map((e) => (
        <SecMusics>
          <Link to='/album/:id'>
            <h2>{`${e.collectionName}`}</h2>
            <img src={e.artworkUrl100} alt={`art for ${e.collectionName}`} />
            <h3>
              {`Artista: ${e.artistName} Tamanho:${e.trackCount} 
            ${e.trackCount === 1 ? 'musica' : 'musicas'}`}
            </h3>
        </Link>
        </SecMusics>
      ))} 
    </MainMusics>
  )
}

export default MusicsRuyTunes
