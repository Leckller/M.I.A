import InicialHome from "../components/InicialHome"
import Weather from "../components/Weather"
import { actualApiType } from "../services/types"

export const Home = ({actual}:actualApiType) => {
  return (
    <div>
      {(actual === 0) && <InicialHome/>}
      {(actual === 1) && <Weather/>}
    </div>
  )
}

