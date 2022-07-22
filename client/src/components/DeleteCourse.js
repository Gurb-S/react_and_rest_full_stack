import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import CourseContext from "../context/Context";

export function DeleteCourse() {
    const { deleteCourse } = useContext(CourseContext);
    const { id } = useParams();
    console.log(id)
    // // TODO: update id based on course that linked here
    // TODO: passing in user credentials
    // TODO: check if users deleting is owner of course
    deleteCourse(id,'joe@smith.com', 'joepassword');

    return(
        <Navigate to='/' />
    )
}