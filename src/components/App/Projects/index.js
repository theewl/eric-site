import React from "react"
import Badge from "../Badge"
import FantasyWzrd from "../../../images/bballwzrd.jpg"
import Website from "../../../images/website.png"
import Blast from "../../../images/blast.png"
import Boardgame from "../../../images/boardgame.jpg"
import Classroom from "../../../images/class.jpg"
import { BadgeWrapper, ProjectWrapper } from "./projects.style"

export default function Projects() {
  return (
    <section id="projects">
      <BadgeWrapper style={{ paddingTop: "75px" }}>
        <font className="title">PROJECTS</font>
        <ProjectWrapper style={{ marginTop: "80px" }}>
          <Badge
            projectURL="https://chrome.google.com/webstore/detail/fantasy-basketball-wzrd/bmojbnihkmbdandkddobjnilkegcooll?hl=en"
            projectPic={FantasyWzrd}
            projectName="Fantasy Basketball Wizard"
          />
          <Badge
            projectURL="https://github.com/theewl/BlastWebClient"
            projectPic={Blast}
            projectName="Blast Web Client"
          />
          <Badge
            projectURL="https://github.com/theewl/eric-site"
            projectPic={Website}
            projectName="Website"
          />
        </ProjectWrapper>
        <ProjectWrapper>
          <Badge
            projectURL="https://github.com/theewl/GameEnviro"
            projectPic={Boardgame}
            projectName="GameEnviro"
          />
          <Badge
            projectURL="https://github.com/theewl/CodepathProject"
            projectPic={Classroom}
            projectName="ZotCourse"
          />
        </ProjectWrapper>
      </BadgeWrapper>
    </section>
  )
}
