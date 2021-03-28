import React,{useState} from 'react';
import clsx from 'clsx';
import TaskFilters from './TaskFilters';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const  ADrawer=(props)=> {
    
    
  const classes = useStyles;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const [open,setOpen]=useState(false);
  
  const handleFiltersOpen=()=>{
        setOpen(true);
    }
    
    const handleClose=()=>{
        setOpen(false);
    }
   const handleFilter=(status,responsible,date)=>{
       setOpen(false)
       props.filter(status,responsible,date);
   }
   
   const handleClearFilters=()=>{
       props.filter("","",null)
   }
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button key={"Options"} onClick={props.update} >
            <ListItemIcon>{2 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={"Update profile"} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button key={"Log out"}  onClick={props.logout}>  
            <ListItemIcon>{2  ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <div>
        <Button onClick={toggleDrawer("left", true)} variant='outlined' color='primary'  align='left'>Menu</Button>
        <Button onClick={handleFiltersOpen} variant='outlined' color='primary'  align='left'>Filters</Button>
        <Button onClick={handleClearFilters} variant='outlined' color='primary'  align='left'>Clear Filters</Button>
        <TaskFilters open={open} close={handleClose} filter={handleFilter}/>
    </div>
          <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
    </div>
  );
};

export default ADrawer;

