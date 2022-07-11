import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export function CourseDetail(props){
    const { id } = useParams();
    useEffect(() => {
        props.whenClicked(`courses/${id}`);
        console.log(props.data[id])
    }, [])
    
    return(
        <div>
            <h2>This is the page for courses/{id}</h2>
            <h3>yoyo</h3>
        </div>
        // <main>
        //     <div className="actions--bar">
        //         <div className="wrap">
        //             <a className="button" href="create-course.html">Update Course</a>
        //             <a className="button" href="create-course.html">Delete Course</a>
        //             <a className="button button-secondary" href="create-course.html">Return to List</a>
        //         </div>
        //     </div>
        //     <div className="wrap">
        //         <h2>Course Detail</h2>
        //         <form>
        //             <div className="main--flex">
        //                 <div>
        //                     <h3 className="course--detail--title">Course</h3>
        //                     <h4 className="course--name">{props.data[id].title}</h4>
        //                     <p>{props.data[id].owner.firstName}{props.data[id].owner.lastName}</p>
        //                     <p>{props.data[id].description}</p>
        //                 </div>
        //                 <div>
        //                     <h3 className="course--detail--title">Estimated Time</h3>
        //                     <p>{props.data[id].estimatedTime}</p>
        //                     <h3 className="course--detail--title">Materials Needed</h3>
        //                     <ul className="course--detail--list">

        //                     </ul>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </main>
        
    )
}