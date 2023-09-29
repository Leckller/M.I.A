import { useEffect } from "react"
import { Dispatch, GlobalStateType } from "../services/types"
import MusicsRuyTunes from "./MusicsRuyTunes"
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { FetchItunes } from "../redux/actions";

function RuyTunes() {
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    const effect = async () => {

      dispatch(FetchItunes())
    }
    effect()
  }, [dispatch])
  const store = useSelector((state:GlobalStateType) => state)

  if (store.ruyTunes.isFetching) return <Loading />
  return (
    <main>
      <MusicsRuyTunes />
    </main>
  )
}

export default RuyTunes
