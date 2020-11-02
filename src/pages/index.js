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

export default function Page() {
  if (typeof document !== "undefined") {
    document.body.style.margin = 0
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
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
