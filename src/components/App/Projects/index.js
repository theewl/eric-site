import React from "react"
import table from "../../../images/table.jpeg"
import styled from "styled-components"
import Badge from "../Badge"
import FantasyWzrd from "../../../images/bballwzrd.jpg"
import Website from "../../../images/website.png"
import Blast from "../../../images/blast.png"
import Boardgame from "../../../images/boardgame.jpg"
import Classroom from "../../../images/class.jpg"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const BadgeWrapper = styled.div`
  height: 650px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${table});
  text-align: center;
  @media (max-width: 630px) {
    height: auto;
    background-image: none;
    background-color: #8d8d92;

  },
  .title {
    font-size: 35px;
    color: white;
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; ;
    color: white;
  },
`

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 630px) {
    display: grid;
  },
`

export default function Projects() {
  return (
    <section id="projects">
      <BadgeWrapper style={{ paddingTop: "75px" }}>
        <font className="title">PROJECTS</font>
        <ProjectWrapper style={{ marginTop: "80px" }}>
          <Badge
            projectURL="https://github.com/theewl/fantasyBasketballWizard"
            projectPic={FantasyWzrd}
            projectName="Fantasy Basketball Wizrd"
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
