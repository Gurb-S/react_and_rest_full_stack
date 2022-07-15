import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import CourseContext from "../context/Context";

export function UserSignIn(){

    // // TODO: submitting form needs to send info to api
    // // TODO: change header value based on user
    // TODO: send user to authenticated route 
    // TODO: display errors when signin invalid
    // TODO: remove comments that prevents from form field from resetting
    // TODO: remove excess comments

    //context Api
    const { signInAuth } = useContext(CourseContext);

    // states
    const [errors, setErrors] = useState([]);

    // imported react elements
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();


    // Form functions
    const handleSubmit = (e) =>{
        e.preventDefault();
        const emailAddress = emailRef.current.value;
        const password = passwordRef.current.value;

        signInAuth(emailAddress, password)
            .then((user) => {
                if(user === null){
                    setErrors(['Sign-in was unsuccessful'])
                }
                else{
                    console.log(`${user.firstName} was signed in 🎉🎉`);
                }
            })
            .catch((err) => {
                console.error(err)
            })
        //e.currentTarget.reset();
    }

    const cancelHandler = (e) =>{
        navigate('/');
    }

    return(
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