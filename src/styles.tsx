import { styled } from "styled-components";

  export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: #041122;
    color: #259073;
  `

// SecOptions

  export const SecLayout = styled.section`
    width: 15vw;
    height: 100%;
    border: solid black 2px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    @media (max-width: 420px) {
      width: 80vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      left: 0;
      top: 0;
      background-color: #eaeaea;
    }
  `
  export const SecLayoutDivHead = styled.header`

    @media (max-width: 420px) {
      display: flex;
      width: 100%;
      height: 10vh;
      align-items: center;
      padding-left: 2vw;
    }
  ` 
  export const SecLayoutMainDiv = styled.div`

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    }
` 
  export const SecLayoutDiv = styled.div`

  button {
    width: 100%;
    height: 10vh;
  }

  @media (max-width: 420px) {
    display: flex;
    width: 100%;
    align-items: center;
    height: 15vh;
    border: solid black 2px;    
    }
` 

  type SecButtonType = {
    position: string;
  }
  export const SecButton = styled.button<SecButtonType>`
    height: 4vh;
    width: 20vw;
    position: ${prop => prop.position};
    z-index: 1001;
    right: 25vw;
  `
  // ------------------------------------ //
  // Layout

    export const TitleMAI = styled.h1`

    animation: jumping 1.5s alternate;

    @keyframes jumping {
      0% {
        transform: scale(1) rotate(0)
      }
      25% {
        transform: scale(1.2) rotate(20deg)
      }
      50% {
        transform: scale(1.6) rotate(0)
      } 
      75% {
        transform: scale(1.2) rotate(-20deg)
      }
      100% {
        transform: scale(1) rotate(0)
      }
  }
    `

    export const SecButtonLD = styled.button`
    height: 4vh;
    width: 20vw;
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

    @media (max-width: 420px) {
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

// InicialHome //

export const MainHome = styled.main`
  width: 100%;
  height: 100%;
`;
export const SecPerfil = styled.section`
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 2vw;
  align-items: center;
  img{
    width: 50vw;
    height: 30vh;
    border: solid black 5px;
  }
  p{
    padding: 0 0 3vh 1vw;
  }
`;

export const SecSecondInfos = styled.section`
  width: 100vw;
  height: 50vh;
  padding: 5vw;
  display: flex;
  flex-direction: row;
  text-align: center;
  aside{
    width: 100%;
    border: solid 2px #259073;
    display: flex;
    padding: 2vw;
  }
  section{
    border: solid 1px #259073;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
export const LittleContent = styled.section`
  display: flex;
  flex-direction: row;
  margin-right: 1vw;
  section{
    width: 40vw;
    height: 25vh;
  }
`
export const AnchorRedes = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  a{
    margin: 1vw;
  }
  img{
    width: 10vw;
    background-color: white;
    border-radius: 25%;
  }
`

// Weather 

export const MainContentWeather = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  form{
    display: flex;
    height: 10vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    label{
      display: flex;
      height: 65%;
      flex-direction: column;
      justify-content: space-around;
    }
    button{
      width:100%;
    }
  }
`
export const SecCurrentWeather = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  width: 80%;
  height: 40%;
  border: solid white 1px;
  border-radius: 10%;
`

// loading 

export const MainLoading = styled.main`
  z-index: -1;
  width: 100vw;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  img{
    width:50%;
    animation: rotate 2s alternate infinite;
  }
  @keyframes rotate {
    0%{
      transform: rotate(0)
    }
    100%{
      transform: rotate(360deg)
    }
  }
`