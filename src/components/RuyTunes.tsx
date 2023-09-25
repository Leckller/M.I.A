import { useEffect, useState } from "react"
import { iTunes } from "../services/Apis"
import { AlbumType } from "../services/types"
import MusicsRuyTunes from "./MusicsRuyTunes"

function RuyTunes() {
  const [returnMusics, setReturnMusics] = useState<AlbumType[]>([])
  useEffect(() => {
    const effect = async () => {
      const response = await iTunes();
      console.log(response);
      setReturnMusics(response);
    }
    effect()
  }, [])
  return (
    <main>
      <MusicsRuyTunes musics={returnMusics} />
    </main>
  )
}

export default RuyTunes
