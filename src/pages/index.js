import React from "react"
import sf from "../images/sf.jpg"
import styled from "styled-components"
import NavBar from "../components/App/NavBar"
import Projects from "../components/App/Projects"
import Home from "../components/App/Home"
import ResumeSection from "../components/App/ResumeSection"
import ShopSection from "../components/App/ShopSection"
import Footer from "../components/App/Footer"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
export default function Page() {
  return (
    <div>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Eric W Liang" />
        <meta name="author" content="Eric W Liang" />
        <title>Eric W Liang</title>
      </Helmet>
      <NavBar />
      <Home />
      <ResumeSection />
      <Projects />
      <ShopSection />
      <Footer />
    </div>
  )
}
