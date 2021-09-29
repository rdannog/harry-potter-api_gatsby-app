import React from "react"
import Logo from "../../images/logo.png"
import { BoxLogo, LogoImg } from "./style"
import { Link } from "gatsby"

export function Header(){

    return(
        <>
        <BoxLogo>
            <LogoImg src={Logo} alt="logo Harry Potter"/>
        </BoxLogo>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home678hjbn </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}