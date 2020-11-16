import { makeStyles } from "@material-ui/core/styles"
import { theme } from "../../../util/theme"

export const useStyles = makeStyles({
  root: {
    margin: "25px",
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
    },
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
  },
  productImage: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  centered: {
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif; ",
    fontSize: "20px",
    color: "black",
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
      transform: "scale(1.06,1.06)",
    },
  },
})
