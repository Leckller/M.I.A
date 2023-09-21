import { Route, Routes } from "react-router-dom"
import { Home, NotFound } from "./routes"
import Layout from "./components/Layout"
import { createGlobalStyle } from "styled-components"

function App() {
  const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
