import loading from '../assets/carregando(1).png'
import { MainLoading } from '../styles'

function Loading() {
  return (
    <MainLoading>
      <h1>Carregando...</h1>
      <img src={loading} alt="" />      
    </MainLoading>
  )
}

export default Loading
