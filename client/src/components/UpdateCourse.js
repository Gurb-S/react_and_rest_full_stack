import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContext from "../context/Context";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


export function UpdateCourse () {

    const { id } = useParams();
    const navigate = useNavigate();

    const { getCourse, UpdateCourse } = useContext(CourseContext);
    //const [ course, setCourse ] = useState([]);

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ estimatedTime, setEstimatedTime ] = useState('');
    const [ materialsNeeded, setMaterialsNeeded ] = useState('');
    
    
    // Notification for signing in


    useEffect(() => {
        getCourse(id)
            //.then(res => setCourse(res.course))
            .then(res => {
                setTitle(res.course.title);
                setDescription(res.course.description);
                setEstimatedTime(res.course.estimatedTime);
                setMaterialsNeeded(res.course.materialsNeeded);
            })
            .catch(err => console.log(err));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id,
            title,
            description,
            estimatedTime,
            materialsNeeded 
        }
        console.log('you tried!')
        console.log(data);
        // TODO: pass in user auth data
        // console.log(userEmail, userPassword)
        UpdateCourse(id,data,'joe@smith.com', 'joepassword')
            .then(() => toast.success('Course has been updated'))
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
                <form onSubmit={handleSubmit}>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle"></label>
                            <input id="courseTitle" name="courseTitle" type="text" value={title} onChange={(e) =>{ setTitle(e.target.value) }}></input>
                            <p>By Joe Smith</p>
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
                    <button className="button" type="submit">Update Course</button>
                    <button className="button button-secondary" onClick={cancelHandler}>Cancel</button>
                </form>
            </div>
            <ToastContainer />
        </main>
    )
}