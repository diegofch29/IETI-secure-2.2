import React, {useState} from 'react';
import {Grid,Paper,Avatar,FormControl,InputLabel,Input} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const Login=(props)=>{
    
    const paperStyle = {padding:20, height:'70vh', width:280, margin:"50px auto"};
    const avatarStyle = {backgroundColor:'blue'};
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChanges = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChanges = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(localStorage.getItem("Username"));
        console.log(localStorage.getItem("Password"));
        console.log(username);
        console.log(password);
        
        if (username === localStorage.getItem("Username") && password === localStorage.getItem("Password")) {
            props.successfully();
        } else {
            props.failed();
        }
    };
    
    
    
    return(
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <h1>Task Planner</h1>
                            <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
                            <h1>Sign In</h1>
                        </Grid>
                        <form className="form" onSubmit={handleLogin}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="userName">Username</InputLabel>
                                <Input id="username" name="username"  autoFocus  onChange={handleUsernameChanges}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="passwd">Password</InputLabel>
                                <Input id="passwd" name="Password" autoFocus type='Password' onChange={handlePasswordChanges}/>
                            </FormControl>
                        <Button  type='submit' fullWidth variant='outlined' color='primary'  align='center' style={{margin:'20px auto'}}>Sign in</Button>
                        <Button  fullWidth variant='outlined' color='primary'  align='center'>Sign up</Button>
                        </form>
                </Paper>
            </Grid>
    );
};

export default Login;