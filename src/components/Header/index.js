import { Link } from "gatsby"
import React from "react"
import Logo from "../../images/logo.png"
import { BoxLogo, LogoImg, StyledLink, Navigation, List } from "./style"




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
            <Link to="/">
                <LogoImg src={Logo} alt="logo Harry Potter"/>
            </Link> 
        </BoxLogo>
        <Navigation>
            <List style={listStyle}>
                <li>
                    <StyledLink style={linkStyle} to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink style={linkStyle} to="/Books">Books</StyledLink>
                </li>
                <li>
                    <StyledLink style={linkStyle} to="/Movies">Movies</StyledLink>
                </li>
            </List>
        </Navigation>
        </>
    )
}