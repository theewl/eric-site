import React from "react"
import sf from "../../../images/sf.jpg"
import styled from "styled-components"
import InfoCard from "../../../components/App/InfoCard"
import Container from "@material-ui/core/Container"

const HomeWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${sf});
  height: 100vh;
  min-height: 500px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .container {
    padding-top: 10%;
    @media (max-width: 400px) {
      padding-top: 15%;
      background-image: none;
      background-color: #4c4a4a;
    }
  }
`

export default function Home() {
  return (
    <section id="home">
      <HomeWrapper>
        <Container className="container" maxWidth="sm">
          <InfoCard />
        </Container>
      </HomeWrapper>
    </section>
  )
}
