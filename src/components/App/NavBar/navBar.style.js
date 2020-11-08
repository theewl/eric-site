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
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "40px",
    textDecoration: "none",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
    position: "relative",
    cursor: "pointer",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: "white",
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover:before": {
      visibility: "visible",
      transform: "scaleX(1)",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "20px",
      display: "none",
    },
  },
  linkBackground: {
    textAlign: "center",
  },
  appBar: {
    background: "none",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.down("xs")]: {
      background: "#003366",
    },
  },
  appBarScrolled: {
    background: "#003366",
    height: "60px",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },
  hamburger: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  toolBar: {
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "auto",
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
  menuOptions: {
    animation: "$fadein 2s",
    backgroundColor: "#003366",
    opacity: "85%",
    borderTop: "ridge",
  },
  menuOption: {
    cursor: "pointer",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
  },
})
