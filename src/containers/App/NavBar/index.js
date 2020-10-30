import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "gatsby";
import { createMuiTheme } from '@material-ui/core/styles';
import scrollTo from "gatsby-plugin-smoothscroll"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: '40px',
      textDecoration: 'none', 
      color: 'antiquewhite', 
      fontFamily: 'Cambria',
      position: 'relative',
      cursor: 'pointer',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: '0',
        left: '0',
        backgroundColor: 'antiquewhite',
        visibility: 'hidden',
        transform: 'scaleX(0)',
        transition: 'all 0.3s ease-in-out',
      },
      '&:hover:before':{
        visibility: 'visible',
        transform: 'scaleX(1)',
      },
      [theme.breakpoints.down("xs")]: {
        marginRight: '20px',
      },
    },
    linkBackground: {
      textAlign:'center',
    },
  });
  
  export default function NavBar({login}) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" elevation={0} style={{background: 'none' }}>
          <Toolbar style={{alignSelf: 'center'}}>
            <div className={classes.linkBackground}>
            <a onClick={() => scrollTo('#home')} className={classes.title} >
              HOME
              </a>
              <a onClick={() => scrollTo('#resume')} className={classes.title} >
                RESUME
              </a>
              <a onClick={() => scrollTo('#projects')} className={classes.title} >
                  PROJECTS
              </a>
              <a onClick={() => scrollTo('#shop')} className={classes.title} >
                  SHOP
              </a>
              {login && <Link to="/login" className={classes.title}>Login</Link>}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }