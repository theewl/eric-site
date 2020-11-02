import React from "react"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { theme } from "../../../util/theme"

export const useStyles = makeStyles({
  root: {
    margin: "20px",
    background: "none",
    opacity: "95%",
    width: "300px",
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: "fit-content",
    },
    "&:hover": {
      animation: "$enlarge 1s forwards",
      "& $centered": {
        visibility: "hidden",
      },
    },
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    color: "antiquewhite",
    fontFamily: "Cambria",
  },
  projectImage: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    filter: "brightness(10%)",
    "&:hover": {
      animation: "$lightUp 1s forwards",
      display: "absolute",
    },
  },
  centered: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Cambria",
    fontSize: "20px",
    color: "antiquewhite",
  },
  "@keyframes lightUp": {
    "100%": {
      filter: "brightness(100%)",
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
  "@keyframes enlarge": {
    "100%": {
      transform: "scale(1.2,1.2)",
    },
  },
})
