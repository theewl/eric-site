import { createMuiTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"

export const theme = createMuiTheme({
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

export const useStyles = makeStyles({
  name: {
    fontSize: "50px",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
  },
  root: {
    textAlign: "-webkit-center",
    height: "450px",
    transition: "0.3s",
    animation: "$fadein 1s",
    opacity: "95%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
    },
  },
  headshot: {
    width: "150px",
    borderRadius: "50%",
  },
  bio: {
    color: "white",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
    [theme.breakpoints.down("xs")]: {
      display: "contents",
    },
  },
  info: {
    display: "grid",
    [theme.breakpoints.down("xs")]: {
      display: "inline-grid",
    },
  },
  "@keyframes fadein": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: "95%",
    },
    "0%": {
      transform: "scale(0.5,0.5)",
    },
    "100%": {
      transform: "scale(1,1)",
    },
  },
  divider: {
    visibility: "initial",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
})
