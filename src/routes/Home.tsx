import InicialHome from "../components/InicialHome"
import { actualApiType } from "../services/types"

export const Home = ({actual}:actualApiType) => {
  return (
    <div>
      {(actual === 0) && <InicialHome/>}
    </div>
  )
}

