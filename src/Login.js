import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return ( 
        <div className = "login">
            <Link to = "/">
                <img className = "login_logo"
                    src = "http://pngimg.com/uploads/amazon/amazon_PNG6.png"
                    alt = "" />
            </Link>

            <div className = "login_container">
                <h1> Sign in </h1> 
                <form>
                    <h5> E-mail </h5> 
                    <input type = "email"
                        value = { email }
                        onChange = { event => setEmail(event.target.value) }/> 
                    <h5> password </h5>  
                    <input type = "password"
                        value = { password }
                        onChange = { event => setPassword(event.target.value) }/>  
                    <button type = "submit"
                        className = "login_signinButton" > Sign In </button>

                </form> 
                <p> By Signing in you agree amazon terms and conditions </p>
                <button 
                    className = "login_registerButton" > 
                    Create an account 
                </button>

        </div>


    </div>
    )
}
export default Login;