import { projects } from "../services/Projects"
import { actualApiType } from "../services/types"
import { ButtonSettingLayout, SecLayout, SecLayoutDiv, SecLayoutDivHead, SecLayoutMainDiv } from "../styles"

function SecOptions({setActual, close, setClose}:actualApiType) {
  return (
    <SecLayout>

      <SecLayoutDivHead>
        Bem vindo!
      </SecLayoutDivHead>

       <SecLayoutMainDiv>
        
        {projects.map((e) => (
          <SecLayoutDiv>

            <ButtonSettingLayout onClick={() => {
              setActual(e.number)
              setClose(!close)
            } }>
              {e.title}
            </ButtonSettingLayout>

          </SecLayoutDiv>
        ))}

       </SecLayoutMainDiv>
       
    </SecLayout>
  )
}

export default SecOptions
