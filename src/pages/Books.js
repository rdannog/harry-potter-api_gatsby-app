import React from "react"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { GlobalStyle } from "./style"

export default function Books(){

    return(
        <div>
            <GlobalStyle/>
            <Header/>
            <Main />
        </div>
    )
}