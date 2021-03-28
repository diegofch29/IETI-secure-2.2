import React,{useState} from 'react';
import Task from './Task';
import ADrawer from "./ADrawer";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Grid,Paper,Dialog} from '@material-ui/core';
import Addition from './NewTask.js';

const Tasks = (props) => {
    
    const paperStyle = {padding:20, width:720, margin:"50px auto"};
    
    const [status, setStatus] = useState("");
    const [responsible, setResponsible] = useState("");
    const [date, setDate] = useState(null);
    
    
    let taskList = props.items;
    
    console.log(taskList);
    
    const [open,setOpen] = useState(false);
    
    
    
    const handleAddition=(task)=>{
        props.addition(task);
        setOpen(!open);    
    };
    
    const handleClickAdditon=()=>{
        setOpen(!open); 
    };
    
    const handleUpdateProfile=()=>{
        window.location.href = "/UserProfile";
    };
    
    const handleFilters=(nstatus,nresponsible,ndate)=>{
        setStatus(nstatus);
        setResponsible(nresponsible);
        setDate(ndate);
    }
    
    if (status!==""){
        taskList = taskList.filter(item => item.status === status);
    }
    
    if (responsible!==""){
        taskList = taskList.filter(item => item.responsible === responsible);
    }
    
    
    if (date!==null){
        taskList = taskList.filter(item => item.dueDate === date);
    }
    
    console.log(status);
    console.log(date);
    console.log(responsible);
    console.log(taskList);
    
    
    
    
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle} >
        <div>
            <ADrawer logout={props.logout} update={handleUpdateProfile} filter={handleFilters}/>
            {taskList.map((item,i) => {
                return (<Task key={i}
                              responsible={item.responsible}
                              description={item.description}
                              status={item.status}
                              dueDate={item.dueDate}/>
                );
            })}
            <Fab color="primary" aria-label="add" align="right" onClick={handleClickAdditon}><AddIcon /></Fab> 
        </div>         
        </Paper>
        <Dialog open={open}>
            <Addition addition={handleAddition}/>
        </Dialog>
        </Grid>
        
        
    );
};

export default Tasks;