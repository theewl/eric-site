import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"

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

export const FooterWrapper = styled.div`
  background-color: #003366;
`

export const useStyles = makeStyles({
  title: {
    fontSize: "30px",
    color: "white",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
    color: "white",
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
    color: "white",
    "&:hover": {
      color: "white",
    },
  },
  linkedin: {
    marginRight: "8px",
    color: "white",
    "&:hover": {
      color: "#0e76a8",
    },
  },
  github: {
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
  licenseText: {
    color: "white",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
  },
})
