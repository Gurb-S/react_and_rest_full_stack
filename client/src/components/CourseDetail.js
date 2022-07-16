import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContext from '../context/Context';
import ReactMarkdown from 'react-markdown';

/**
 * * The materials needed are currently all on once list element 
 * // TODO: display materials needed as individual items
 * TODO: remove extra console logs and remove extra comments
 */

export function CourseDetail(){
    const { id } = useParams();
    const { getCourse } = useContext(CourseContext);

    const [ course, setCourse ] = useState([]);

    useEffect(() => {
        getCourse(id)
            //.then(res => console.log(res.course))
            .then(res => setCourse(res.course))
            .catch(err => console.log(err));
        // const itemsNeeded = course.materialsNeeded.split('\n');
        // const items = itemsNeeded.map( item => <li>{item}</li>)
        // console.log(itemsNeeded)
    }, [])

    //course.materialsNeeded.length - 1
    
    return(
        // <div>
        //     <h2>This is the page for courses/{id}</h2>
        //     <h3>yoyo</h3>
        // </div>
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <a className="button" href={`/courses/${id}/update`}>Update Course</a>
                    <a className="button" href='/'>Delete Course</a>
                    <a className="button button-secondary" href="/">Return to List</a>
                </div>
            </div>
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>Billy Bob</p>
                            <p>{course.description}</p>
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