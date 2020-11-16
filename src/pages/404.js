import React from "react"
import { createGlobalStyle } from "styled-components"
import NavBar from "../components/App/NavBar"
import Footer from "../components/App/Footer"
import ErrorSection from "../components/App/404"
import error from "../images/404.jpg"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Product = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar inProductPage={true} />
      <ErrorSection pageImage={error} />
      <Footer />
    </div>
  )
}

export default Product
