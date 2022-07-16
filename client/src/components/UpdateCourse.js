import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContext from "../context/Context";

export function UpdateCourse () {

    const { id } = useParams();
    const { getCourse } = useContext(CourseContext);
    const [ course, setCourse ] = useState([]);

    useEffect(() => {
        getCourse(id)
            .then(res => setCourse(res.course))
            .catch(err => console.log(err));
    }, [])

    return(
        <main>
            <div className="wrap">
                <h2>Update Course</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle"></label>
                            <input id="courseTitle" name="courseTitle" type="text" value={course.title}></input>
                            <p>By Joe Smith</p>
                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" value={course.description}>
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" value={course.estimatedTime}></input>
                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" value={course.materialsNeeded}>
                            </textarea>
                        </div>
                    </div>
                    <button className="button" type="submit">Update Course</button>
                    <button className="button button-secondary">Cancel</button>
                </form>
            </div>
        </main>
    )
}