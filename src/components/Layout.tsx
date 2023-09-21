import { Outlet } from "react-router-dom"
import { DivLayoutBox, Footer, Header, Main, SecLayout } from "../styles"

function Layout() {
  console.log(window.innerWidth)
  return (
    <Main>
      {(window.innerHeight <= 400) ? (
        <SecLayout>sec</SecLayout>
      ) : (
        <button>---</button>
      )}
      <DivLayoutBox>
        <Header>
          <span>a</span>
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
