import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useStyles } from "./navBar.style"

export default function NavBar({
  menuItems,
  inProductPage,
  inShop,
  primaryColor = "white",
}) {
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
            {inProductPage ? (
              <Link
                style={{ marginRight: 0, color: primaryColor }}
                to="/shop/#for-sale"
                className={classes.title}
              >
                BACK TO HOME
              </Link>
            ) : (
              menuItems.map(item => (
                <a
                  onClick={() =>
                    item.includes(" ")
                      ? scrollTo(`#${item.replace(" ", "-").toLowerCase()}`)
                      : scrollTo(`#${item.toLowerCase()}`)
                  }
                  style={{ color: primaryColor }}
                  className={classes.title}
                >
                  {item}
                </a>
              ))
            )}
            {inShop && !inProductPage && (
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
              {inProductPage ? (
                <Link
                  style={{
                    color: primaryColor,
                    padding: "15px",
                    textDecoration: "none",
                    width: "fit-content",
                  }}
                  to="/shop/#for-sale"
                >
                  <font className={classes.menuOption}>BACK TO HOME</font>
                </Link>
              ) : (
                menuItems.map(item => (
                  <a
                    onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                    style={{ padding: "15px", color: primaryColor }}
                  >
                    <font className={classes.menuOption}> {item}</font>
                  </a>
                ))
              )}

              {inShop && !inProductPage && (
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
