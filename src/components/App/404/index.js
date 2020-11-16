import React from "react"
import Container from "@material-ui/core/Container"
import { ErrorWrapper } from "./404.style"

export default function ErrorSection({ title, pageImage }) {
  return (
    <section id="home">
      <ErrorWrapper
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
      </ErrorWrapper>
    </section>
  )
}
