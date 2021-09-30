import React from "react"
import { Link } from "gatsby"
import { Header } from "../components/Header"
import { GlobalStyle } from "./style"

export default function Books(){

    return(
        <div>
            <GlobalStyle/>
            <Header/>
            <h1>Página de Livros</h1>
            <p> Lorem </p>
        </div>
    )
}