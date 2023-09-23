import { Outlet } from "react-router-dom"
import { DivLayoutBox, Footer, Header, Main, SecButton, SecButtonLD, TitleMAI } from "../styles"
import SecOptions from "./SecOptions"
import { useState } from "react"
import { actualApiType } from "../services/types"

function Layout({setActual, actual}:actualApiType) {
  const [configs, setConfigs] = useState(false)  
  return (
    <Main>
      {(window.innerWidth >= 400) && (
          <SecOptions actual={actual} setActual={setActual}/>
      )}
      <DivLayoutBox>
        <Header>
        {(window.innerWidth <= 400) && (
      <SecButton 
        position={configs ? 'absolute' : 'static'}
        onClick={() => setConfigs(!configs)}>Projects</SecButton>
        )}
        {configs && <SecOptions actual={actual} setActual={setActual}/>}
          <TitleMAI>M.A.I</TitleMAI>
          <SecButtonLD><img src="" alt="sun" /></SecButtonLD>
        </Header>
        <Outlet />
        <Footer>é o ruy</Footer>
      </DivLayoutBox>
    </Main>
  )
}

export default Layout
