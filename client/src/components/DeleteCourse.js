import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import CourseContext from "../context/Context";

export function DeleteCourse() {
    const { deleteCourse } = useContext(CourseContext);
    //const { id } = useParams();

    deleteCourse(5,'joe@smith.com', 'joepassword');

    return(
        <Navigate to='/' />
    )
}