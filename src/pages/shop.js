import React from "react"
import shop from "../images/shop.jpg"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import NavBar from "../components/App/NavBar"
import Footer from "../components/App/Footer"
import Items from "../components/App/Items"
import ShopHome from "../components/App/ShopHome"
import Sold from "../components/App/Sold"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const ShopWrapper = styled.div`
  background-image: url(${shop});
  height: 100vh;
  min-height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`

const useStyles = makeStyles({
  button: {
    backgroundColor: "unset",
    color: "red",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
    border: "2px solid red",
    fontSize: "20px",
    height: "50px",
    width: "180px",
    cursor: "pointer",
    "&:hover": {
      animation: "$enlarge 1s forwards",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default function Shop() {
  const classes = useStyles()

  return (
    <ShopWrapper>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="EWL Shop" />
        <meta name="author" content="EWL Shop" />
        <title>EWL Shop</title>
      </Helmet>
      <ShopHome />
      <NavBar
        inShop={true}
        menuItems={["HOME", "FOR SALE", "SOLD", "CONTACT"]}
      />
      <Items />
      <Sold />
      <Footer />
    </ShopWrapper>
  )
}
