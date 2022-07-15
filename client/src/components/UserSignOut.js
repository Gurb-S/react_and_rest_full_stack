import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import CourseContext from "../context/Context";

export function UserSignOut () {
    const { signOut } = useContext(CourseContext);
    signOut();
    return(
        <Navigate to='/'/>
    )
}