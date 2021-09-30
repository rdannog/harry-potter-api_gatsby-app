import styled from 'styled-components'

export const Text = styled.h2`
@import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');

    font-size: 1.5rem;
    font-weight: bolder;
    font-family: 'Megrim', cursive;

`
export const Image = styled.img`
    width:13.2vw;
    max-height:45vh;
`
export const Card = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    
`
export const PostCard = styled.div`
    width:20vw;
    height:75vh;
    margin:2vw 2vh;
    padding:2vw 2vh;
    background-color:rgba(0, 0, 0, 0.5);
    
    color:white;
    border: solid 1px white;
    border-radius:12px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    &:hover{
        transform: scale(1.05);
    }
`
export const DetailBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    width:100%;
`
export const Details = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');    
    width:80%;
    padding:0.8vw 1vh;
    text-align:center;
    border-radius:12px;
    background-color:gray;
    font-family: 'Raleway', sans-serif;
    cursor:pointer;
`
