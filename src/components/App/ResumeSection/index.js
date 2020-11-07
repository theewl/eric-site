import React from "react"
import { useStyles, ResumeWrapper } from "./resumeSection.style"

export default function Resume() {
  const classes = useStyles()
  return (
    <section id="resume">
      <ResumeWrapper>
        <div className={classes.resumeSection}>
          <font className={classes.title}>CHECK OUT MY RESUME</font>
          <br />
          <br />
          <br />
          <a href="https://drive.google.com/file/d/14E1MI5fBsL9cLtqqoF0YJr-kW7ZuvRH4/view?usp=sharing">
            <button className={classes.button}>RESUME</button>
          </a>
        </div>
      </ResumeWrapper>
    </section>
  )
}
