import React, {useState} from 'react';
import {Paper,FormControl,InputLabel,Input} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


const Addition =(props)=>{
    
    
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [responsible, setResponsible] = useState("");
    const [dueDate, setDueDate] = useState(null);
    
    
    const paperStyle = {padding:20, height:'70vh', width:420, margin:"50px auto"};
    
    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleResponsibleChange = (e) => {
        setResponsible(e.target.value);
    };

    const handleDueDateChange = (e) => {
        setDueDate(e.target.value);
    };
    
    const handleAdditon =()=>{
        if(description === "" || status === "" || responsible === "" || dueDate === null){
            alert("some fields are empty");
        }
        else {
            const Add ={
                "description": description,
                "status": status,
                "responsible": {
                    "name": responsible,
                    "email":"diego@gmail.com"
                },
                "dueDate": dueDate
            };
            props.addition(Add);
            
        }
    };
    
    
    return(
            <Paper elevation={10} style={paperStyle}>
                <h1>New Task</h1>
                <form>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Description">Description</InputLabel>
                        <Input id="description" name="description"  autoFocus onChange={handleDescriptionChange} />
                </FormControl>
                 <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Status">Status</InputLabel>
                        <Input id="status" name="status"  autoFocus  onChange={handleStatusChange}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Responsible">Responsible</InputLabel>
                        <Input id="responsible" name="responsible"  autoFocus  onChange={handleResponsibleChange}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Date">Date</InputLabel>
                        <Input id="date" name="date" type='date' autoFocus  onChange={handleDueDateChange}/>
                </FormControl>
                </form>
                         <Fab color="primary" aria-label="add" align="right" onClick={handleAdditon}><AddIcon /></Fab>
            </Paper>
    );
};

export default Addition;