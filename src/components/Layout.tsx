import { Outlet } from "react-router-dom"
import { DivLayoutBox, Footer, Header, Main, SecButton, SecButtonLD, TitleMAI } from "../styles"
import SecOptions from "./SecOptions"
import { useState } from "react"

function Layout() {
  const [configs, setConfigs] = useState(false)  
  return (
    <Main>
      {(window.innerWidth >= 400) && (
          <SecOptions/>
      )}
      <DivLayoutBox>
        <Header>
        {(window.innerWidth <= 400) && (
      <SecButton 
        position={configs ? 'absolute' : 'static'}
        onClick={() => setConfigs(!configs)}>---</SecButton>
        )}
        {configs && <SecOptions/>}
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
