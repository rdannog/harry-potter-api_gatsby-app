import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle= createGlobalStyle`
body{
  @import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');

  background-color:black;
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
export const Text=styled.h2`
    font-size: 1.5rem;
    font-weight: bolder;
    font-family: 'Megrim', cursive;

`
export const Image=styled.img`
    width:13.2vw;
    max-height:45vh;
`
export const Card=styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    
`
export const PostCard=styled.div`
    width:20vw;
    height:75vh;
    margin:2vw 2vh;
    padding:2vw 2vh;
    background-color:#cd8d00;
    border: solid 2px black;
    border-radius:12px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    &:hover{
        transform: scale(1.05);
    }
`
export const Details=styled.p`
    font-size: 1vw;
    font-family: 'Michroma', sans-serif;`
