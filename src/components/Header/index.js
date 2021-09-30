import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo.png"
import { BoxLogo, LogoImg } from "./style"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');
    
    color: white;
    font-size:3vw;
    font-weight:bolder;
`

export function Header(){

    const linkStyle ={
        textDecoration:"none"
    }
    const listStyle = {
        listStyle: "none",
        fontFamily: "'Megrim', cursive"
    }

    return(
        <>
        <BoxLogo>
            <LogoImg src={Logo} alt="logo Harry Potter"/>
        </BoxLogo>
        <nav>
            <ul style={listStyle}>
                <li>
                    <StyledLink style={linkStyle} to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink style={linkStyle} to="/Books">Books</StyledLink>
                </li>
                <li>
                    <StyledLink style={linkStyle} to="/Movies">Movies</StyledLink>
                </li>
            </ul>
        </nav>
        </>
    )
}