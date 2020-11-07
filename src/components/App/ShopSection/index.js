import React from "react"
import { navigate } from "gatsby"
import { useStyles, ResumeWrapper } from "./shopSection.style"
export default function ShopSection() {
  const classes = useStyles()
  return (
    <section id="shop">
      <ResumeWrapper>
        <div className={classes.shopSection}>
          <br />
          <button onClick={() => navigate("/shop")} className={classes.button}>
            SHOP
          </button>
        </div>
      </ResumeWrapper>
    </section>
  )
}
