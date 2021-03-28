import React, {useState} from 'react';
import {Paper,FormControl,InputLabel,Input} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const UserProfile =(props)=>{
    const paperStyle = {padding:20, height:'70vh', width:280, margin:"50px auto"};
    
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    
    const handleNameChange = (e) =>{
        setFullName(e.target.value)
    }
    
    const handleEmailChange = (e) =>{
        setEmail((e.target.value));
    }
    
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }
    
    const handlePasswordAgainChange = (e) =>{
        setPasswordAgain(e.target.value)
    }
    
    const handleRegister = () =>{
        if (password===passwordAgain){
            if (fullName === "" || email === "" || password === "" || passwordAgain === ""){
                alert("some fields are empty");
            }
            else{
                const user = {
                    "name": fullName,
                    "email":email,
                    "password":password
                }
                localStorage.setItem("Username", user.name);
                localStorage.setItem("Password", user.password);
                console.log(localStorage.getItem("Username"));
                console.log(localStorage.getItem("Password"));
                props.register(user);
            }
        }
        else{
            alert("The passwors are not equal");
        }
    }
    
    return(
            <Paper elevation={10} style={paperStyle}>
                <form>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="FullName">Full Name</InputLabel>
                        <Input id="fullName" name="fullName"  autoFocus onChange={handleNameChange} />
                </FormControl>
                 <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Email">Email</InputLabel>
                        <Input id="email" name="email"  autoFocus  onChange={handleEmailChange}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Password">Password</InputLabel>
                        <Input id="password" type='password' name="password"  autoFocus  onChange={handlePasswordChange}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="PasswordAgain">Password</InputLabel>
                        <Input id="passwordagain" type='password' name="passwordAgain"  autoFocus  onChange={handlePasswordAgainChange}/>
                </FormControl>
                </form>
                 <Fab color="primary" aria-label="add" align="right" onClick={handleRegister}><AddIcon /></Fab>
            </Paper>
    );
};

export default UserProfile;