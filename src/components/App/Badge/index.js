import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStyles } from "./badge.style"

export default function Badge({ projectName, projectPic, projectURL }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <a href={projectURL}>
        <img className={classes.projectImage} src={projectPic} />
        <div className={classes.centered}>{projectName}</div>
      </a>
    </div>
  )
}
