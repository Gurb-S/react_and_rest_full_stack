import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CourseContext from "../context/Context";


export function UserSignUp () {

    //import from router dom
    const navigate = useNavigate();

    //import from context api
    const { createUser, signInAuth } = useContext(CourseContext);

    //state hooks
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ emailAddress, setEmailAddress ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errors, setErrors ] = useState('');

    //handles creating a new user
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstName,
            lastName,
            emailAddress,
            password
        }
        createUser(user)
            .then((res) => {
                setErrors(res);
                if(!firstName || !lastName || !emailAddress || !password){
                    toast.error('Acount could not be created')
                }
                else if(res === 201){
                    toast.success('Account successfully created')
                    signInAuth(emailAddress, password);
                    navigate('/')
                }
            })
            .catch(err =>{
                console.error(err)
                toast.error('Acount could not be created')
            })
    }


    const cancelHandler = () =>{
        navigate('/');
    }

    return(
        <main>
            <div className="form--centered">
                <h2>Sign Up</h2>
                { errors && errors.length > 0 ? <ul className="validation--errors">{errors.map( err => <li className="validation--errors">{err}</li>)}</ul> : <></>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type='email' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="emailAddress" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button className="button sign" type="submit">Sign Up</button>
                    <button className="button button-secondary cancel" onClick={cancelHandler}>Cancel</button>
                </form>
                <p>
                    Already have a user account? <Link to="/signin">Click here to sign in</Link>
                </p>
            </div>
            <ToastContainer />
        </main>
    )
}