import React from "react"
import Logo from "../../images/logo.png"
import { BoxLogo, LogoImg } from "./style"

export function Header(){

    return(
        <BoxLogo>
            <LogoImg src={Logo} alt="logo Harry Potter"/>
        </BoxLogo>
    )
}