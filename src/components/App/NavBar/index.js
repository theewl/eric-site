import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useStyles } from "./navBar.style"

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
