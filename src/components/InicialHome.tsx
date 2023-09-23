import { SecPerfil, MainHome, SecSecondInfos, LittleContent, AnchorRedes } from "../styles";
import ruy from '../assets/ruy.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';

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
              Clique no botão "Projects" para alternar entre meus projetos.
            </p>
          </section>
          <section>
            <h2>Redes</h2>
            <AnchorRedes>
            <a href="https://github.com/Leckller" target="_blank"><img src={github} alt="github" /></a>
            <a href="https://www.instagram.com/ruy.jpg/" target="_blank"><img src={instagram} alt="instagram" /></a>
            </AnchorRedes>
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
