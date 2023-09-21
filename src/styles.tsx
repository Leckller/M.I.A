import { styled } from "styled-components";

  export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: pink;
    display: flex;
    flex-direction: row;
  `

// Layout

  export const SecLayout = styled.section`
    width: 15vw;
    height: 100%;
    border: solid black 2px;
  `
  export const SecButton = styled.button`
    height: 4vh;
    width: 10vw;
    position: absolute;
    left: 10vw;
  `
  export const DivLayoutBox = styled.div`
    width: 85vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: solid black 2px;
    border-right: solid black 2px;
    border-bottom: solid black 2px;
    div{
      width:100%;
      height: 80%;
    }
    @media (max-width: 400px) {
      width: 100vw;
      border-left: black solid 2px
    }
  `
  export const Header = styled.header`
    width: 100%;
    height: 9vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* box-shadow: 0 0 5px 0 black; */
    border-bottom: solid black 2px;
    span {
      background-color: white;
    }
`
    export const Footer = styled.footer`
      width: 100%;
      height: 5vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center
    `
//  