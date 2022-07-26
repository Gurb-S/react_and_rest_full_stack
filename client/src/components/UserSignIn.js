import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CourseContext from "../context/Context";
import { toast, ToastContainer } from 'react-toastify';

export function UserSignIn(){

    // // TODO: submitting form needs to send info to api
    // // TODO: change header value based on user
    // // TODO: send user to authenticated route 
    // // TODO: display errors when signin invalid
    // // TODO: redirect user to home or private route that sent them here
    // // TODO: fix toast issue with sign in successful not showing
    // // TODO: remove comments that prevents from form field from resetting
    // TODO: remove excess comments

    //context Api
    const { signInAuth } = useContext(CourseContext);

    //import from router dom
    const navigate = useNavigate();
    const location = useLocation();

    // states
    const [errors, setErrors] = useState([]);

    // save values for inputs
    const emailRef = useRef();
    const passwordRef = useRef();

    //Notifcation
    let signInNotify;
    const notify = () => {
        return signInNotify;
    };


    // hanles the user login 
    const handleSubmit = (e) =>{
        e.preventDefault();
        const emailAddress = emailRef.current.value;
        const password = passwordRef.current.value;
        signInAuth(emailAddress, password)
            .then((user) => {
                if(user === null){
                    setErrors(["Username or password is incorrect"]);
                    signInNotify = toast.error('Sign-in was unsuccessful');
                }
                else{
                    signInNotify = toast.success('Sign-in was successful')
                    if(location.state?.from){
                        navigate(location.state.from)
                    }
                    else{
                        navigate('/')
                    }
                }
            })
            .catch((err) => {
                console.error(err)
            })
        e.currentTarget.reset();
    }

    const cancelHandler = (e) =>{
        navigate('/');
    }

    return(
        <main>
            <div className="form--centered">
                <h2>Sign in</h2>
                { errors.length > 0 ? <h3 className="validation--errors">{errors}</h3> : <></>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" ref={emailRef} required></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" ref={passwordRef} required></input>
                    <button className="button sign" type="submit" onClick={notify}>Sign In</button>
                    <button className="button button-secondary cancel" onClick={cancelHandler}>Cancel</button>
                </form>
                <p>
                    Don't have a user account? <Link to="/signup" className="link">Click here to sign up</Link>
                </p>
            </div>
            <ToastContainer />
        </main>
    )
}