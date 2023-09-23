import { projects } from "../services/Projects"
import { actualApiType } from "../services/types"
import { SecLayout, SecLayoutDiv, SecLayoutDivHead, SecLayoutMainDiv } from "../styles"

function SecOptions({setActual}:actualApiType) {
  return (
    <SecLayout>

      <SecLayoutDivHead>
        Bem vindo!
      </SecLayoutDivHead>

       <SecLayoutMainDiv>
        
        {projects.map((e) => (
          <SecLayoutDiv>

            <button onClick={() => setActual(e.number)}>
              {e.title}
            </button>

          </SecLayoutDiv>
        ))}

       </SecLayoutMainDiv>
       
    </SecLayout>
  )
}

export default SecOptions
