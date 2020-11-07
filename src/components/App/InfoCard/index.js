import React from "react"
import avatar from "../../../images/avatar.png"
import { useStyles } from "./infoCard.style"
export default function SimpleCard() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <br />
      <br />
      <div className={classes.info}>
        <font className={classes.name}>Eric W Liang</font>
        <br />
        <img className={classes.headshot} src={avatar} alt="pic" />
        <br />
        <br />
        <font className={classes.bio}>
          Software Engineer
          <font
            style={{
              fontFamily:
                "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
              color: "slategray",
            }}
          >
            <font className={classes.divider}> | </font>
          </font>{" "}
          San Francisco{" "}
          <font
            style={{
              fontFamily:
                "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
              color: "slategray",
            }}
          ></font>
        </font>
      </div>
    </div>
  )
}
