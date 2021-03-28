import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Task=(props)=> {
        const useStyles = makeStyles({  
            root: {minWidth: 275},
            bullet: {display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)'},
            title: {fontSize: 14},
            pos: {marginBottom: 12}});
        
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.descrition}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.status}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
           {new Date(props.dueDate).toLocaleString()}
        </Typography>
        <Typography variant="body2" component="p">
          {props.responsible.name}
          <br />
          {props.responsible.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default Task;

