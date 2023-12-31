import { Route, Routes } from "react-router-dom"
import { Album, Home, NotFound } from "./routes"
import Layout from "./components/Layout"
import { createGlobalStyle } from "styled-components"
import { useState } from "react"

function App() {
  const [actualApi, setActualApi] = useState(0)
  const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    button{
      cursor: pointer;
    }
  `
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Layout actual={actualApi} setActual={setActualApi} />} >
          <Route index element={<Home setActual={setActualApi} actual={actualApi} />} />
          <Route path="/album/:id" element={<Album/>} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
