import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageGridList from '../ImageGridList';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: '30px',
    backgroundColor: '#4e463c',
    opacity: '95%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    animation: '$fadein 1s',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'antiquewhite',
    fontFamily: 'Cambria',
  },
  '@keyframes fadein': {
    'from': {
        opacity:0
    },
    'to': {
        opacity:'95%'
    }
  }
});

export default function Badge({projectName}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {projectName}
        </Typography>
        <ImageGridList/>
      </CardContent>
  </Card>
  )
}
