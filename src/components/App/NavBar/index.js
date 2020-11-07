import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import { createMuiTheme } from "@material-ui/core/styles"
import scrollTo from "gatsby-plugin-smoothscroll"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

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
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "40px",
    textDecoration: "none",
    color: "white",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
    position: "relative",
    cursor: "pointer",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: "white",
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover:before": {
      visibility: "visible",
      transform: "scaleX(1)",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "20px",
      display: "none",
    },
  },
  linkBackground: {
    textAlign: "center",
  },
  appBar: {
    background: "none",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.down("xs")]: {
      background: "#1a1f48",
    },
  },
  appBarScrolled: {
    background: "#1a1f48",
    height: "60px",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },
  hamburger: {
    display: "none",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  toolBar: {
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "auto",
    },
  },
  "@keyframes fadein": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: "95%",
    },
  },
  menuOptions: {
    animation: "$fadein 2s",
    backgroundColor: "#4e463c",
    opacity: "85%",
    borderTop: "ridge",
  },
  menuOption: {
    cursor: "pointer",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
  },
})

export default function NavBar({ login }) {
  const [showMenu, setShowMenu] = useState(false)
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })
  return (
    <div className={classes.root}>
      <AppBar
        className={`${classes.appBar} ${
          trigger === false ? "" : classes.appBarScrolled
        }`}
        elevation={0}
        position="fixed"
      >
        <Toolbar className={classes.toolBar}>
          <IconButton edge="start" className={classes.hamburger}>
            <MenuIcon onClick={() => setShowMenu(!showMenu)} />
          </IconButton>
          <div className={classes.linkBackground}>
            <a onClick={() => scrollTo("#home")} className={classes.title}>
              HOME
            </a>
            <a onClick={() => scrollTo("#resume")} className={classes.title}>
              RESUME
            </a>
            <a onClick={() => scrollTo("#projects")} className={classes.title}>
              PROJECTS
            </a>
            <a
              onClick={() => scrollTo("#shop")}
              className={classes.title}
              style={{ marginRight: 0 }}
            >
              SHOP
            </a>
            {login && (
              <Link to="/login" className={classes.title}>
                Login
              </Link>
            )}
          </div>
        </Toolbar>
        {showMenu && (
          <span className={classes.menuOptions}>
            <div style={{ display: "grid" }}>
              <a onClick={() => scrollTo("#home")} style={{ padding: "15px" }}>
                <font className={classes.menuOption}>HOME</font>
              </a>
              <a
                onClick={() => scrollTo("#resume")}
                style={{ padding: "15px" }}
              >
                <font className={classes.menuOption}>RESUME</font>
              </a>
              <a
                onClick={() => scrollTo("#projects")}
                style={{ padding: "15px" }}
              >
                <font className={classes.menuOption}>PROJECTS</font>
              </a>
              <a onClick={() => scrollTo("#shop")} style={{ padding: "15px" }}>
                <font className={classes.menuOption}>SHOP</font>
              </a>
              {login && (
                <Link to="/login" className={classes.menuOption}>
                  Login
                </Link>
              )}
            </div>
          </span>
        )}
      </AppBar>
    </div>
  )
}
