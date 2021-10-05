import styled from 'styled-components'

export const Title = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
    font-size: 1.5rem;
    font-weight: bolder;
    font-family: 'Megrim', cursive;
    text-align:center;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px black, 0 0 30px black, 0 0 40px black, 0 0 55px black, 0 0 75px yellow;
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
        -webkit-box-shadow: 0px 2px 23px 8px rgba(191,191,191,0.76); 
        box-shadow: 0px 2px 23px 8px rgba(191,191,191,0.76);
    }
`
export const DetailBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    width:100%;
`
export const Text = styled.p`
    width:80%;
    padding:0.8vw 1vh;
    text-align:center;
    border-radius:12px;
    font-family: 'Poiret One', cursive;
    font-size:1.4vw;
    cursor:pointer;
    color:black;
    background: #8D8D8D;
    background: -moz-linear-gradient(top, #8D8D8D 0%, #D9DADC 50%, #8D8D8D 100%);
    background: -webkit-linear-gradient(top, #8D8D8D 0%, #D9DADC 50%, #8D8D8D 100%);
    background: linear-gradient(to bottom, #8D8D8D 0%, #D9DADC 50%, #8D8D8D 100%);
`
