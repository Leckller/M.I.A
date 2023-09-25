import InicialHome from "../components/InicialHome"
import Weather from "../components/Weather"
import { oneApiType } from "../services/types"

export const Home = ({actual}:oneApiType) => {
  return (
    <div>
      {(actual === 0) && <InicialHome/>}
      {(actual === 1) && <Weather/>}
    </div>
  )
}

