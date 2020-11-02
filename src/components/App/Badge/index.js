import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import { useStyles } from "./badge.style"

export default function Badge({ projectName, projectPic, projectURL }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <a href={projectURL}>
        <img className={classes.projectImage} src={projectPic} />
        <div className={classes.centered}>{projectName}</div>
      </a>
    </Card>
  )
}
