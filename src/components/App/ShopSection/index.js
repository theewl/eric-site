import React from "react"
import jordan from "../../../images/jordan.jpg"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import { navigate } from "gatsby"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const ResumeWrapper = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${jordan});
  text-align: -webkit-center;
`

const useStyles = makeStyles({
  title: {
    fontSize: "40px",
    color: "white",
    fontFamily: "Cambria",
    color: "antiquewhite",
  },
  shopSection: {
    display: "block",
    padding: "120px",
    [theme.breakpoints.down("xs")]: {
      padding: "50px",
    },
  },
  button: {
    backgroundColor: "unset",
    color: "antiquewhite",
    fontFamily: "Cambria",
    border: "2px solid antiquewhite",
    fontSize: "20px",
    height: "50px",
    width: "180px",
    cursor: "pointer",
    "&:hover": {
      animation: "$enlarge 1s forwards",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  "@keyframes enlarge": {
    "100%": {
      transform: "scale(1.2,1.2)",
    },
  },
})

export default function ShopSection() {
  document.body.style.margin = 0
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
