import React from "react"
import pen from '../images/pen.jpeg';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

const ResumeWrapper = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${pen});
  text-align: -webkit-center;
`;

const useStyles = makeStyles({
  title: {
    fontSize:'40px', 
    color:'white',
    fontFamily: 'Cambria',
    color: 'antiquewhite',
  },
  resumeSection: {
    display: 'block',
    padding: '180px',
    [theme.breakpoints.down("xs")]: {
      padding: '50px',
    },
  },
  button: {
    backgroundColor: 'unset',
    color: 'antiquewhite',
    fontFamily: 'Cambria',
    border: '2px solid antiquewhite',
    fontSize: '20px',
    height: '50px',
    width: '180px',
    cursor: 'pointer',
    '&:hover': {
      animation: '$enlarge 1s forwards',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },
  },
  '@keyframes enlarge': {
    '100%': {
        transform: 'scale(1.2,1.2)'
    }
  }
});


export default function Resume() {
  document.body.style.margin = 0;
  const classes = useStyles();
  return (
    <section id='resume'>
      <ResumeWrapper>
      <div className={classes.resumeSection}>
        <font className={classes.title}>CHECK OUT MY RESUME</font>
        <br/>
        <br/>
        <br/>
        <button className={classes.button}>
          RESUME
        </button>
      </div>
      </ResumeWrapper>
    </section>
  )
}
