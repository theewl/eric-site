import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageGridList from '../ImageGridList';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  root: {
    margin: '20px',
    background: 'none',
    opacity: '95%',
    width: '350px',
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    [theme.breakpoints.down("xs")]: {
      width: 'fit-content',
    },
    '&:hover': {
      animation: '$enlarge 1s forwards',
      '& $centered': {
        visibility: 'hidden'
      }
    },
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'antiquewhite',
    fontFamily: 'Cambria',
  },
  projectImage: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    filter: 'brightness(10%)',
    '&:hover': {
      animation: '$lightUp 1s forwards',
      display: 'absolute',
    },
  },
  centered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Cambria',
    fontSize: '20px',
    color: 'antiquewhite',

  },
  '@keyframes lightUp': {
    '100%': {
      filter: 'brightness(100%)',
    },
  },
  '@keyframes fadein': {
    'from': {
        opacity:0
    },
    'to': {
        opacity:'95%'
    }
  },
  '@keyframes enlarge': {
    '100%': {
        transform: 'scale(1.2,1.2)'
    }
  }
});

export default function Badge({projectName, projectPic, projectURL}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <a href={projectURL}> 
        <img className={classes.projectImage} src={projectPic}/>
        <div className={classes.centered} >{projectName}</div>
        </a>
  </Card>
  )
}
