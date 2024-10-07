import React, { useState } from "react";
import "../Styling/Style.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            window.location.href = '/api';
        } else {
            alert('Invalid credentials!');
        }
    };
    return (
        <>
            <div id="contain">
                <div className="container1">  
                <form className="login">  
                    <h2>Login</h2>  
                    <div className="form-group1">  
                        <label htmlFor="name">User-Name</label>  
                        <input type="text" id="name" name="name" required placeholder="Enter your name" onChange={(e) => setEmail(e.target.value)} />  
                    </div>  
                    <div className="form-group1">  
                        <label htmlFor="password">Password</label>  
                        <input type="password" id="password" name="password" required placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} 
                        />  
                    </div>  
                    <div className="form-group1">  
                       <Link to="/api">
                       <button type="submit" onClick={handleLogin}>Login</button> 
                       </Link> 
                    </div>  
                    <Link to="/signup">
                    <p id="create">Create an account?Sign Up</p>  
                    </Link>
                </form>  
            </div>  
            </div>
        </>
    );
};

export default Login;