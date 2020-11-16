import React from "react"
import InfoCard from "../../../components/App/InfoCard"
import Container from "@material-ui/core/Container"
import { ProductInfoWrapper } from "./productInfo.style"

export default function Home({ id }) {
  return (
    <section id="home">
      <ProductInfoWrapper>
        <Container className="container" maxWidth="sm"></Container>
        <div
          style={{ display: "flex", justifyContent: "center", height: "auto" }}
        >
          <div>Images</div>
          <div>Info</div>
          {console.log(id)}
        </div>
        {/*
            - product images
            - product name
            - product description
            - size
            - price
            - id
            - style code
            - condition
            - notes
            - 

        */}
      </ProductInfoWrapper>
    </section>
  )
}
