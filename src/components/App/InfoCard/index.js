import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import avatar from "../../../images/avatar.png"
//import useMediaQuery from '@material-ui/core/useMediaQuery';
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

const useStyles = makeStyles({
  name: {
    fontSize: "80px",
    fontFamily: "Cambria",
    fontWeight: 600,
    color: "antiquewhite",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
  },
  root: {
    borderRadius: "10%",
    background: "#4e463c",
    textAlign: "-webkit-center",
    height: "450px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    animation: "$fadein 1s",
    opacity: "95%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
    },
  },
  headshot: {
    width: "150px",
    borderRadius: "50%",
  },
  bio: {
    color: "antiquewhite",
    fontFamily: "Cambria",
    [theme.breakpoints.down("xs")]: {
      display: "contents",
    },
  },
  info: {
    display: "grid",
    [theme.breakpoints.down("xs")]: {
      display: "inline-grid",
    },
  },
  "@keyframes fadein": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: "95%",
    },
    "0%": {
      transform: "scale(0.5,0.5)",
    },
    "100%": {
      transform: "scale(1,1)",
    },
  },
  divider: {
    visibility: "initial",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
})

export default function SimpleCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <br />
      <br />
      <div className={classes.info}>
        <font className={classes.name}>Eric Liang</font>
        <br />
        <img className={classes.headshot} src={avatar} alt="pic" />
        <br />
        <br />
        <font className={classes.bio}>
          Software Engineer
          <font style={{ fontFamily: "Cambria", color: "slategray" }}>
            <font className={classes.divider}> | </font>
          </font>{" "}
          San Francisco{" "}
          <font style={{ fontFamily: "Cambria", color: "slategray" }}></font>
        </font>
      </div>
    </Card>
  )
}