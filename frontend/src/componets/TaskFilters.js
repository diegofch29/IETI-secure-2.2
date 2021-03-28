import React, { useState } from 'react';
import {Modal,Paper,FormControl,InputLabel,Input} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';




const TaskFilters =(props)=>{
    const paperStyle = {padding:20, height:'70vh', width:280, margin:"50px auto"};
    
    const [status, setStatus] = useState("");
    const [responsible, setResponsible] = useState("");
    const [dueDate, setDueDate] = useState(null);
    
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleResponsibleChange = (e) => {
        setResponsible(e.target.value);
    };

    const handleDueDateChange = (e) => {
        setDueDate(e.target.value);
    };
    const handleFilter=()=>{
        props.filter(status,responsible,dueDate)
    }
    
    return(
            <div>
                <Modal
                    disablePortal
                    disableEnforceFocus
                    disableAutoFocus
                    open={props.open}
                    onClose={props.close}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
            <div>
            <Paper elevation={10} style={paperStyle}>
            <h1>New Task</h1>
                <form>
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
            <Fab color="primary" aria-label="add" align="right" onClick={handleFilter}><AddIcon /></Fab>
            </Paper>
            </div>
        </Modal>
        </div>
    );
};


export default TaskFilters;