import React from "react"
import folders from '../images/folders.jpg';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ResumeWrapper = styled.div`
  min-height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${folders});
  text-align: -webkit-center;
`;

const useStyles = makeStyles({
  title: {
    fontSize:'35px', 
    color:'white',
    fontFamily: 'Cambria',
    color: 'antiquewhite',
    fontWeight: '600'
  },
  resumeSection: {
    display: 'grid',
    padding: '150px',
  },
  button: {
    backgroundColor: 'unset',
    color: 'antiquewhite',
    fontFamily: 'Cambria',
    border: '2px solid antiquewhite',
    fontSize: '20px',
    height: '50px',
    width: '10%',
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
        <button className={classes.button}>
          RESUME
        </button>
      </div>
      </ResumeWrapper>
    </section>
  )
}
