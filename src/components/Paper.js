import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PortfolioReviewCard from './Card';
import List from '../PortfolioList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(160),
      height: theme.spacing(160),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

 

  return (
    <div className={classes.root}>
      
      <Paper elevation={3}>
        {List.map((item,i)=>(
          <PortfolioReviewCard
          key={i}
          title = {item.title}
          url={item.url}
          cardContent = {item.description}
          img = {item.picture}
          ></PortfolioReviewCard>
        ))}
          
      </Paper>
    </div>
  );
}