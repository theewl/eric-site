import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FooterWrapper, useStyles } from "./footer.style"

export default function Footer() {
  const classes = useStyles()
  return (
    <section id="contact">
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
