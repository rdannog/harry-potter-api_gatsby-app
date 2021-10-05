import styled from 'styled-components'
import { Link } from "gatsby"

export const BoxLogo=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

`
export const LogoImg=styled.img`
   width:40vw;

`
export const StyledLink = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');
    
    color: #d3d3d3;
    font-size:3vw;
    font-weight:bolder;
    &:hover{
        text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px black, 0 0 30px black, 0 0 40px black, 0 0 55px black, 0 0 75px yellow;
    }
`
export const Navigation = styled.nav`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 6vh;
`
export const List =styled.ul`
    width:100%;
    height:15vh;
    display:flex;
    align-items:center;
    flex-direction: row;
    justify-content: space-evenly;
    background-color:rgba(0, 0, 0, 0.5);
    animation: slide-in 1000ms;
    @keyframes slide-in {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0%);
        }
      }
`
