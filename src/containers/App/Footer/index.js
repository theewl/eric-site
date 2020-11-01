import React from "react"
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

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

const FooterWrapper = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  text-align: -webkit-center;
`;

const useStyles = makeStyles({
  title: {
    fontSize:'40px', 
    color:'white',
    fontFamily: 'Cambria',
    color: 'antiquewhite',
  },
  footerSection: {
    display: 'block',
    padding: '30px',
    [theme.breakpoints.down("xs")]: {
      padding: '50px',
    },
  },
  '@keyframes enlarge': {
    '100%': {
        transform: 'scale(1.2,1.2)'
    }
  }
});


export default function Footer() {
  document.body.style.margin = 0;
  const classes = useStyles();
  return (
    <section id='footer'>
      <FooterWrapper>
      <div className={classes.footerSection}>
        <font className={classes.title}>CONTACT</font>
        <br/>
      </div>
      </FooterWrapper>
    </section>
  )
}
