import styled from 'styled-components'

export const Text=styled.p`
    font-size: 2vw;
`
export const Image=styled.img`
    width:13.2vw;
    max-height:50vh;
`
export const Card=styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-evenly;
    
`
export const PostCard=styled.div`
    width:20vw;
    height:85vh;
    margin:2vw 2vh;
    padding:2vw 2vh;
    background-color:#cd8d00;
    border: solid 2px black;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    &:hover{
        transform: scale(1.05);
    }
`
export const Container=styled.div`
    background-color:black;
`
export const Details=styled.p`
    font-size: 1.5vw;
`
