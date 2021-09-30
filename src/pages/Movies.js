import React from "react"
import { GlobalStyle } from "./style"
import { Header } from "../components/Header"

export default function Movies(){

    return(
        <div>
            <GlobalStyle/>
            <Header/>
            <h1>Página dos Filmes</h1>
        </div>
    )
}