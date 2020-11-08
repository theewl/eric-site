import React from "react"
import Product from "../Product"
import FantasyWzrd from "../../../images/bballwzrd.jpg"
import Website from "../../../images/website.png"
import Blast from "../../../images/blast.png"
import Boardgame from "../../../images/boardgame.jpg"
import Classroom from "../../../images/class.jpg"
import { ItemsWrapper, ProductWrapper } from "./items.style"

export default function Items() {
  return (
    <section id="for-sale">
      <ItemsWrapper style={{ paddingTop: "75px" }}>
        <font className="title">FOR SALE</font>
        <ProductWrapper>
          <Product
            productPic={FantasyWzrd}
            productName="Air Jordan 1 Tie Dye"
          />
          <Product productPic={Blast} productName="Yeezy 350 Natural" />
          <Product productPic={Website} productName="Air Jordan 1 Bio Hack" />
          <Product productPic={Website} productName="Air Jordan 1 Royal Toe" />
        </ProductWrapper>
        <ProductWrapper>
          <Product productPic={Boardgame} productName="Yeezy 350" />
          <Product productPic={Classroom} productName="Yeezy 700" />
          <Product
            productPic={Website}
            productName="Air Jordan 1 Satin Black Toe"
          />
          <Product productPic={Website} productName="Air Jordan 1 Tie Dye" />
        </ProductWrapper>
      </ItemsWrapper>
    </section>
  )
}
