import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
