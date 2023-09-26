import { useEffect, useState } from "react"
import { iTunes } from "../services/Apis"
import { AlbumType } from "../services/types"
import MusicsRuyTunes from "./MusicsRuyTunes"
import Loading from "./Loading";

function RuyTunes() {
  const [returnMusics, setReturnMusics] = useState<AlbumType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      const response = await iTunes();
      setReturnMusics(response);
      setLoading(false);
    }
    effect()
  }, [])
  if (loading) return <Loading />
  return (
    <main>
      <MusicsRuyTunes musics={returnMusics} />
    </main>
  )
}

export default RuyTunes
