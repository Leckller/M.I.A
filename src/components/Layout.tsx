import { Outlet } from "react-router-dom"
import { DivLayoutBox, Footer, Header, Main, SecButton } from "../styles"
import SecOptions from "./SecOptions"

function Layout() {
  console.log(window.innerWidth)
  return (
    <Main>
      {(window.innerWidth >= 400) && (
          <SecOptions/>
      )}
      <DivLayoutBox>
        <Header>
        {(window.innerWidth <= 400) && (
      <SecButton onClick={() => console.log('click')}>---</SecButton>
        )}
          <span></span>
          <h1>M.A.I</h1>
          <button><img src="" alt="sun" /></button>
        </Header>
        <Outlet />
        <Footer>é o ruy</Footer>
      </DivLayoutBox>
    </Main>
  )
}

export default Layout
