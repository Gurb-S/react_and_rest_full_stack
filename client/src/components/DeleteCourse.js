import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import CourseContext from "../context/Context";

export function DeleteCourse() {

    //import from context api
    const { deleteCourse, userCreds } = useContext(CourseContext);

    //import from router dom
    const { id } = useParams();
    const navigate = useNavigate();

    //deletes course if owner and redirects to forbidden if not owner
    useEffect(() =>{
        deleteCourse(id,userCreds.username,userCreds.password)
        .then(res =>{
            if(res && res === 403){
                navigate('/forbidden')
            }   
        })
    },[])

    return(
        <Navigate to='/' />
    )
}