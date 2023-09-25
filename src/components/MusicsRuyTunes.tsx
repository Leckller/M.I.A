import { AlbumType } from "../services/types"

function MusicsRuyTunes({musics}: {musics: AlbumType[]}) {
  return (
    <div>
      { musics.map((e) => (
        <div>
          <h2>{`${e.collectionName}`}</h2>
          <img src={e.artworkUrl100} alt={`art for ${e.collectionName}`} />
          <h3>
            {`Artista: ${e.artistName} Tamanho:${e.trackCount} 
          ${e.trackCount === 1 ? 'musica' : 'musicas'}`}
          </h3>
        </div>
      ))} 
    </div>
  )
}

export default MusicsRuyTunes
