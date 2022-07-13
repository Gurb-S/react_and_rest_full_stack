import React, { useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export function UserSignIn(){

    // TODO: submitting form needs to send info to api

    // states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // imported react elements
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();


    // Form functions
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(emailRef.current.value);
        setEmail(emailRef.current.value)
        console.log(passwordRef.current.value)
        setPassword(passwordRef.current.value)
        e.currentTarget.reset();
    }

    const cancelHandler = (e) =>{
        navigate('/');
    }

    return(
        // <div>
        //     <h1>Sign in Page</h1>
        //     <h2>This is the page doug</h2>
        // </div>
        <main>
            <div className="form--centered">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <input id="emailAddress" name="emailAddress" type="email" ref={emailRef} required></input>
                    <input id="password" name="password" type="password" ref={passwordRef} required></input>
                    <button className="button" type="submit">Sign In</button>
                    <button className="button button-secondary" onClick={cancelHandler}>Cancel</button>
                </form>
                <p>
                    Don't have a user account? <Link to="/signup">Click here to sign up</Link>
                </p>
            </div>
        </main>
    )
}