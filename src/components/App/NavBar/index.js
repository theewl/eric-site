import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useStyles } from "./navBar.style"

export default function NavBar({ menuItems, inShop, primaryColor = "white" }) {
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
            <a
              onClick={() => scrollTo(`#${menuItems[0].toLowerCase()}`)}
              style={{ color: primaryColor }}
              className={classes.title}
            >
              {menuItems[0]}
            </a>
            <a
              onClick={() =>
                menuItems[1].includes(" ")
                  ? scrollTo(`#${menuItems[1].replace(" ", "-").toLowerCase()}`)
                  : scrollTo(`#${menuItems[1].toLowerCase()}`)
              }
              style={{ color: primaryColor }}
              className={classes.title}
            >
              {menuItems[1]}
            </a>
            <a
              onClick={() => scrollTo(`#${menuItems[2].toLowerCase()}`)}
              style={{ color: primaryColor }}
              className={classes.title}
            >
              {menuItems[2]}
            </a>
            <a
              onClick={() => scrollTo(`#${menuItems[3].toLowerCase()}`)}
              className={classes.title}
              style={{ marginRight: inShop ? "40px" : 0, color: primaryColor }}
            >
              {menuItems[3]}
            </a>
            {inShop && (
              <Link
                style={{ marginRight: 0, color: primaryColor }}
                to="/"
                className={classes.title}
              >
                ABOUT ME
              </Link>
            )}
          </div>
        </Toolbar>
        {showMenu && (
          <span className={classes.menuOptions}>
            <div style={{ display: "grid", color: primaryColor }}>
              <a
                onClick={() => scrollTo(`#${menuItems[0].toLowerCase()}`)}
                style={{ padding: "15px", color: primaryColor }}
              >
                <font className={classes.menuOption}> {menuItems[0]}</font>
              </a>
              <a
                onClick={() => scrollTo(`#${menuItems[1].toLowerCase()}`)}
                style={{ padding: "15px", color: primaryColor }}
              >
                <font className={classes.menuOption}> {menuItems[1]}</font>
              </a>
              <a
                onClick={() => scrollTo(`#${menuItems[2].toLowerCase()}`)}
                style={{ padding: "15px", color: primaryColor }}
              >
                <font className={classes.menuOption}> {menuItems[2]}</font>
              </a>
              <a
                onClick={() => scrollTo(`#${menuItems[3].toLowerCase()}`)}
                style={{ padding: "15px", color: primaryColor }}
              >
                <font className={classes.menuOption}> {menuItems[3]}</font>
              </a>
              {inShop && (
                <Link
                  style={{
                    color: primaryColor,
                    padding: "15px",
                    textDecoration: "none",
                    width: "fit-content",
                  }}
                  to="/"
                >
                  <font className={classes.menuOption}>ABOUT ME</font>
                </Link>
              )}
            </div>
          </span>
        )}
      </AppBar>
    </div>
  )
}
