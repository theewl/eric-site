import React from "react"
import InfoCard from "../../../components/App/InfoCard"
import Container from "@material-ui/core/Container"
import { HomeWrapper } from "./home.style"

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
