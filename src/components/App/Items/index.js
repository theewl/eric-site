import React, { useState, useEffect } from "react"
import Product from "../Product"
import shoe from "../../../images/tempShoe.png"
import { ItemsWrapper, ProductWrapper } from "./items.style"
import axios from "axios"

export default function Items() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get("https://ewl-shop.vercel.app/api/mongo/getProducts")
      .then(function (response) {
        const tmp = JSON.stringify(response.data)
        const newData = JSON.parse(tmp)
        setProducts(newData.products)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])
  return (
    <section id="for-sale">
      <ItemsWrapper style={{ paddingTop: "75px" }}>
        {/* 
        - product picture
        - product name
        - product id
        */}
        <font className="title">FOR SALE</font>
        <ProductWrapper>
        {products.map((product, i) => (
          <Product productPic={shoe} productName={product["name"]} />
        ))}
        </ProductWrapper>
      </ItemsWrapper>
    </section>
  )
}
