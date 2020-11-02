import React from "react"
import sf from "../images/sf.jpg"
import styled from "styled-components"
import NavBar from "../components/App/NavBar"
import Projects from "../components/App/Projects"
import Home from "../components/App/Home"
import ResumeSection from "../components/App/ResumeSection"
import ShopSection from "../components/App/ShopSection"
import Footer from "../components/App/Footer"

export default function Page() {
  document.body.style.margin = 0
  return (
    <div>
      <NavBar />
      <Home />
      <ResumeSection />
      <Projects />
      <ShopSection />
      <Footer />
    </div>
  )
}
