import React from "react"
import{ Main } from "../components/Main/index"
import {Header} from "../components/Header/index"
import { GlobalStyle } from "./style"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </>
  )
}

export default IndexPage
