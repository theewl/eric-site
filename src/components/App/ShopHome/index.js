import React from "react"
import InfoCard from "../../../components/App/InfoCard"
import Container from "@material-ui/core/Container"
import { ShopHomeWrapper } from "./shopHome.style"

export default function ShopHome() {
  return (
    <section id="home">
      <ShopHomeWrapper>
        <Container className="container" maxWidth="sm">
          <div className="title">
            <font className="titleText">EWL Shop</font>
          </div>
        </Container>
      </ShopHomeWrapper>
    </section>
  )
}
