import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import CourseContext from "../context/Context";


export const PrivateRoute = ({ children }) => {
    const { authenticatedUser } = useContext(CourseContext);
    return authenticatedUser ? children : <Navigate to="/signin"/>

}