import { Outlet } from "react-router-dom";
import { DivLayoutBox, Footer, Header, Main, SecButton, SecButtonLD, TitleMAI } from "../styles";
import SecOptions from "./SecOptions";
import { useState } from "react";
import { oneApiType } from "../services/types";
import x from '../assets/x.png';
import sun from '../assets/sol.png';
import lua from '../assets/lua(1).png';

function Layout({setActual, actual}:oneApiType) {
  const [configs, setConfigs] = useState(false);
  const [ backMode, setBackMode] = useState(false);
  return (
    <Main>
      {(window.innerWidth >= 420) && (
          <SecOptions close={configs} setClose={setConfigs} actual={actual} setActual={setActual}/>
      )}
      <DivLayoutBox>
        <Header>
        {(window.innerWidth <= 420) && (
      <SecButton 
        position={configs ? 'absolute' : 'static'}
        onClick={() => setConfigs(!configs)}
        id='btnProjects'
        >{configs ? <img src={x} /> : <h1>Projects</h1>}</SecButton>
        )}
        {configs && <SecOptions close={configs} setClose={setConfigs} actual={actual} setActual={setActual}/>}
          <TitleMAI>BETA1.1</TitleMAI>
          <SecButtonLD onClick={
            () => setBackMode(!backMode)
          }>{backMode ? <img src={sun} alt='sun'/> : <img src={lua} alt='moon'/> }</SecButtonLD>
        </Header>
        <Outlet />
        <Footer>é o ruy</Footer>
      </DivLayoutBox>
    </Main>
  )
}

export default Layout
