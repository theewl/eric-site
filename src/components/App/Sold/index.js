import React from "react"
import Badge from "../Badge"
import FantasyWzrd from "../../../images/bballwzrd.jpg"
import Website from "../../../images/website.png"
import Blast from "../../../images/blast.png"
import Boardgame from "../../../images/boardgame.jpg"
import Classroom from "../../../images/class.jpg"
import { ProjectWrapper, SoldWrapper } from "./sold.style"

export default function Projects() {
  return (
    <section id="sold">
      <SoldWrapper style={{ paddingTop: "75px" }}>
        <font className="title">SOLD</font>
        <ProjectWrapper style={{ marginTop: "80px" }}>
          <Badge
            projectURL="https://github.com/theewl/fantasyBasketballWizard"
            projectPic={FantasyWzrd}
            projectName="Yeezy 350 Zebra"
          />
        </ProjectWrapper>
      </SoldWrapper>
    </section>
  )
}
