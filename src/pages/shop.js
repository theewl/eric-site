import React from "react"
import sf from "../images/sf.jpg"
import styled from "styled-components"
import Container from "@material-ui/core/Container"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"

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

const ShopWrapper = styled.div`
  background-image: url(${sf});
  height: 100vh;
  min-height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
`

const useStyles = makeStyles({
  button: {
    backgroundColor: "unset",
    color: "red",
    fontFamily: "Cambria",
    border: "2px solid red",
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
})

export default function Shop() {
  const classes = useStyles()

  return (
    <ShopWrapper>
      <div style={{ paddingTop: "30px" }}>
        <font
          style={{
            fontSize: "60px",
            fontFamily: "Cambria",
            fontWeight: "800",
            color: "red",
          }}
        >
          SHOP IS COMING SOON!!!
        </font>
        <br />
        <br />
        <button onClick={() => navigate("/")} className={classes.button}>
          BACK
        </button>
      </div>
    </ShopWrapper>
  )
}
