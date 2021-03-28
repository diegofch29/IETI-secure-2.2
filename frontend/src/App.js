import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './componets/Login.js';
import Tasks from './componets/Tasks.js';
import UserProfile from './componets/UserProfile.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const  App=()=> {
    let userData = {
        name : "diego",
        email: "diego@gmail.com",
        password : "1234"
    };
    
    if (localStorage.getItem("Usename")===null){  
        console.log("-----------------------WHY");
        localStorage.setItem("Password", userData.password);
        localStorage.setItem("Username", userData.name);
    }
    
    const items=[{"description": "Work",
                   "status": "In progress",
                   "dueDate": 156464645646,
                   "responsible": {
                      "name": "Diego Chinchilla",
                       "email": "diego@gmail.com"
               }, 
           },
           {
  	"description": "Play",
  	"responsible": {
  		"name": "Diego Chinchilla",
  		"email": "diego@gmail.com"
  	},
  	"status": "ready",
  	"dueDate": 156464645648
  },
  {"description": "Collage",
  	"responsible": {
  		"name": "Diego Chinchilla",
  		"email": "diego@gmail.com"
  	},
  	"status": "Almost",
  	"dueDate": 156464645648}];
    
    const [itemsState,setItems]=useState(items);
    
    
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("items", JSON.stringify(items));
    
    console.log(localStorage.getItem("Usename"));
    
    
    
    
    let isLoggedIn = false;
    
    const [isLoggedInValue,setIsLoggedIn]=useState(isLoggedIn);
    
    const handleSuccessfullyLogin = (e) => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/home";
    };
    
    const handleFailedLogin = (e) => {
        alert("Usuario o Clave Incorrectos");
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", false);
        window.location.href = "/";
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", false);
        window.location.href = "/";
    };
    
    
    const handleAddition= (newTask) =>{
        setItems(itemsState => [...itemsState,newTask]);
    };
    
    const handleRegistration = (newUser) => {
        const userData = newUser;
        alert();
        window.location.href = "/home";
    }
    
    
    
    const LoginView = () => (<Login successfully={handleSuccessfullyLogin} failed={handleFailedLogin}/>);
    const HomeView = () => (<Tasks items={itemsState} logout={handleLogout} addition={handleAddition}/>);
    const UserProfileView= () =>(<UserProfile register={handleRegistration}/>)
    
    return (
          <Router>
            <div className="App">
                <Route exact path="/" component={LoginView}/>
                <Route path="/home" component={HomeView}/>
                <Route path="/UserProfile" component={UserProfileView}/>      
            </div>
        </Router>
  );
}

export default App;
