import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseContext from "../context/Context";
import { toast, ToastContainer } from 'react-toastify';


export function UpdateCourse () {

    //import from router dom
    const { id } = useParams();
    const navigate = useNavigate();

    //import from context Api
    const { getCourse, updateCourse, authenticatedUser, userCreds } = useContext(CourseContext);

    //States
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ estimatedTime, setEstimatedTime ] = useState('');
    const [ materialsNeeded, setMaterialsNeeded ] = useState('');
    const [ errors, setErrors ] = useState('');    
    const [ owner, setOwner ] = useState('');
    

    //displays the info for the course being updated as well if checking if logged in user is the owner
    useEffect(() => {
        const loginedIn = authenticatedUser.firstName + ' ' + authenticatedUser.lastName;
        getCourse(id)
            .then(res => {
                if(res.course){
                    setTitle(res.course.title);
                    setDescription(res.course.description);
                    setEstimatedTime(res.course.estimatedTime);
                    setMaterialsNeeded(res.course.materialsNeeded);
                    setOwner(res.owner.firstName + ' ' + res.owner.lastName);
                    if(loginedIn !== res.owner.firstName + ' ' + res.owner.lastName){
                        navigate(`/forbidden`)
                    }
                }
                else{
                    navigate('/notfound')
                }

            })
            .catch(err => console.log('📛📛📛📛',err));
    }, [])

    //sends the new course data to the update course function to validate and make changes to the course
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id,
            title,
            description,
            estimatedTime,
            materialsNeeded 
        }

        updateCourse(id,data,userCreds.username, userCreds.password)
            .then(res => {
                res.errors ? setErrors(res.errors) : setErrors('');
                if(!title || !description){
                    toast.error('Course could not be updated');
                }
                if(res === 204){
                    navigate(`/courses/${id}`)
                }
            })
            .catch(err =>{
                console.error(err)
                toast.error('Course could not be updated')
            })
    }

    const cancelHandler = () =>{
        navigate(`/courses/${id}`);
    }

    return(
        <main>
            <div className="wrap">
                <h2>Update Course</h2>
                { errors && errors.length > 0 ?(
                    <div className="validation--errors">
                        <ul>
                            {errors.map(err => <li>{err}</li>)}
                        </ul>
                    </div>
                ) : <></>}
                <form onSubmit={handleSubmit}>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle"></label>
                            <input id="courseTitle" name="courseTitle" type="text" value={title} onChange={(e) =>{ setTitle(e.target.value) }}></input>
                            <p>By {owner}</p>
                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" value={description} onChange={(e) =>{ setDescription(e.target.value) }}>
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={(e) =>{ setEstimatedTime(e.target.value) }}></input>
                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" value={materialsNeeded} onChange={(e) =>{ setMaterialsNeeded(e.target.value) }}>
                            </textarea>
                        </div>
                    </div>
                    <button className="button sign" type="submit">Update Course</button>
                    <button className="button button-secondary cancel" onClick={cancelHandler}>Cancel</button>
                </form>
            </div>
            <ToastContainer />
        </main>
    )
}