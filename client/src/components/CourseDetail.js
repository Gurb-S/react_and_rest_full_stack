import React, { useEffect, useContext, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import CourseContext from '../context/Context';
import ReactMarkdown from 'react-markdown';


export function CourseDetail(){

    //import from router dom
    const { id } = useParams();
    const navigate = useNavigate();

    //import from context Api
    const { getCourse, authenticatedUser,deleteCourse, userCreds } = useContext(CourseContext);

    //States
    const [ course, setCourse ] = useState([]);
    const [ owner, setOwner ] = useState('');

    const loginedIn = authenticatedUser ? authenticatedUser.firstName + ' ' + authenticatedUser.lastName : null;
    
    //retires the course from the id provided
    useEffect(() => {
        getCourse(id)
            .then(res => { 
                if(res.message){
                    navigate('/notfound')
                }
                else if(res === 500){
                    navigate('/error')
                }
                else{
                    setOwner(res.owner.firstName + ' ' + res.owner.lastName);
                    setCourse(res.course)
                }
            })
            .catch(err => {
                navigate('/error')
                console.log('There is an issue', err)
            });
    }, [])

    const deletesCourse = () => {
        console.log(userCreds.username)
        deleteCourse(id,userCreds.username,userCreds.password)
            .then(res =>{
                console.log(res)
                if(res && res === 403){
                    navigate('/forbidden')
                }   
            })
            .catch(err =>{
                console.log('📛📛📛📛', err)
            })
    }

    return(
        <main>
            <div className="actions--bar">
            {loginedIn !== owner ? (                  
                <div className="wrap">
                    <a className="button button-secondary" href="/">Return to List</a>
                </div>
            ) : (
                <div className="wrap">
                    <a className="button" href={`/courses/${id}/update`}>Update Course</a>
                    <Link to={`/`} className="button"><span onClick={deletesCourse}>Delete Course</span></Link>
                    <a className="button button-secondary" href="/">Return to List</a>
                </div>
            )}
            </div>
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>By {owner}</p>
                            <ReactMarkdown>{course.description}</ReactMarkdown>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            {course.estimatedTime ?(<p>{course.estimatedTime}</p>) : <ReactMarkdown>*No time was provided by owner*</ReactMarkdown> }
                            <h3 className="course--detail--title">Materials Needed</h3>
                            {course.materialsNeeded ? (
                            <ul className="course--detail--list">
                                <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
                            </ul>
                            ) : <ReactMarkdown>*No materials needed was provided by owner*</ReactMarkdown>}
                        </div>
                    </div>
                </form>
            </div>
        </main>   
    )
}