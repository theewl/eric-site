import { Router as ReachRouter } from "@reach/router"
import React from "react"
import Shop from "./shop"
import { createGlobalStyle } from "styled-components"
import NavBar from "../components/App/NavBar"
import Footer from "../components/App/Footer"
import ProductInfo from "../components/App/ProductInfo"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Product = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar inProductPage={true} primaryColor="black" />
      <ReachRouter>
        <ProductInfo path="/product/:id" />
      </ReachRouter>
      <Footer />
    </div>
  )
}

export default Product
