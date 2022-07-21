import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import CourseContext from "../context/Context";

export function DeleteCourse() {
    const { deleteCourse } = useContext(CourseContext);
    //const { id } = useParams();
    // TODO: update id based on course that linked here
    deleteCourse(6,'joe@smith.com', 'joepassword');

    return(
        <Navigate to='/' />
    )
}