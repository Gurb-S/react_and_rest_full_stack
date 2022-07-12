import React, { useContext, useEffect, useState } from "react";
import CourseContext from "../Context";

export function Courses(){

    const { getCourses } = useContext(CourseContext)

    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        getCourses()
            .then( res => setCourses(res.courses))
            .catch(err => console.log(err));
    }, [])

    
    return(
        // <div>
        //     <h1>LIST OF Courses</h1>
        // </div>
        <main>
            <div className="wrap main--grid">
                {
                    courses.map(course =>(
                        <a className="course--module course-link" href={`courses/${course.key}`}>
                            <h2 className="course--label">Course</h2>
                            <h3 className="course--title">{course.title}</h3>
                        </a>
                    ))
                }
                <a className="course--module course--add-module" href="create-course.html">
                    <span className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                        </svg>
                        New Course
                    </span>
                </a>
            </div>
        </main>
    )
}