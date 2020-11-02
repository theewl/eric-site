import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

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

const FooterWrapper = styled.div`
  background-color: #4e463c;
`

const useStyles = makeStyles({
  title: {
    fontSize: "30px",
    color: "white",
    fontFamily: "Cambria",
    color: "antiquewhite",
  },
  footerSection: {
    textAlign: "center",
    display: "block",
    padding: "30px",
    [theme.breakpoints.down("xs")]: {
      padding: "50px",
    },
  },
  "@keyframes enlarge": {
    "100%": {
      transform: "scale(1.2,1.2)",
    },
  },
  email: {
    marginRight: "8px",
    color: "antiquewhite",
    "&:hover": {
      color: "white",
    },
  },
  linkedin: {
    marginRight: "8px",
    color: "antiquewhite",
    "&:hover": {
      color: "#0e76a8",
    },
  },
  github: {
    color: "antiquewhite",
    "&:hover": {
      color: "black",
    },
  },
  licenseText: {
    color: "antiquewhite",
    fontFamily: "Cambria",
  },
})

export default function Footer() {
  const classes = useStyles()
  return (
    <section id="footer">
      <FooterWrapper>
        <div className={classes.footerSection}>
          <font className={classes.title}>CONTACT</font>
          <br />
          <span>
            <a className={classes.email} href="mailto: ericwliang95@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              className={classes.linkedin}
              href="https://www.linkedin.com/in/eric-liang-1b936a128"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className={classes.github} href="https://github.com/theewl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <br />
          <br />
          <font className={classes.licenseText}>
            This website designed and developed by Eric W Liang.
            <br />© Eric W Liang 2020
          </font>
        </div>
      </FooterWrapper>
    </section>
  )
}
