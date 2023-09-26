import InicialHome from "../components/InicialHome"
import RandomAnimals from "../components/RandomAnimals"
import RuyTunes from "../components/RuyTunes"
import Weather from "../components/Weather"
import { oneApiType } from "../services/types"

export const Home = ({actual}:oneApiType) => {
  return (
    <div>
      {(actual === 0) && <InicialHome/>}
      {(actual === 1) && <Weather/>}
      {(actual === 2) && <RandomAnimals/>}
      {(actual === 3) && <RuyTunes/>}
    </div>
  )
}

