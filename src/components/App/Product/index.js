import React from "react"
import { useStyles } from "./product.style"

export default function Product({ productName, productPic, productURL }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <a href={productURL}>
        <img className={classes.productImage} src={productPic} />
        <div className={classes.centered}>{productName}</div>
      </a>
    </div>
  )
}
