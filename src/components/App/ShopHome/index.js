import React from "react"
import Container from "@material-ui/core/Container"
import { ShopHomeWrapper } from "./shopHome.style"

export default function ShopHome({ title, pageImage }) {
  return (
    <section id="home">
      <ShopHomeWrapper
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(${pageImage})`,
        }}
      >
        <Container className="container" maxWidth="sm">
          <div className="title">
            <font className="titleText">{title}</font>
          </div>
        </Container>
      </ShopHomeWrapper>
    </section>
  )
}
