import { SecPerfil, MainHome, SecSecondInfos, LittleContent } from "../styles"
import ruy from '../assets/ruy.png'

function InicialHome() {
  return (
    <MainHome>
      <SecPerfil>
        <img src={ruy} alt="Imagem Minha!" />
        <p>Olá! pessoa da internet, meu nome é Gusttavo Ruy, e eu sou Desenvolvedor de 
          software full stack Jr!
        </p>
      </SecPerfil>
      <SecSecondInfos>
        <LittleContent>
          <section>
            <p>
              
            </p>
          </section>
          <section>
            <p>

            </p>
          </section>
        </LittleContent>
        <aside>
          <p>

          </p>
        </aside>
      </SecSecondInfos>
    </MainHome>
  )
}

export default InicialHome
