import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContext from '../Context';

/**
 * * The materials needed are currently all on once list element 
 * TODO: display materials needed as individual items
 * TODO: remove extra console logs and remove extra comments
 */

export function CourseDetail(){
    const { id } = useParams();
    const { getCourse } = useContext(CourseContext)

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
                    <a className="button" href="create-course.html">Update Course</a>
                    <a className="button" href="create-course.html">Delete Course</a>
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
                            <p>{course.estimatedTime}</p>
                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                <li>{course.materialsNeeded}</li>
                                {/* {items} */}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>   
    )
}