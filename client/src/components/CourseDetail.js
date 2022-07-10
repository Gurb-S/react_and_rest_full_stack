import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export function CourseDetail(props){
    const { id } = useParams();
    useEffect(() =>{
        props.whenClicked(`courses/${id}`);
    }, [id])
    console.log(props.data)
    return(
        <div>
            <h2>This is the page for courses/{id}</h2>
            <h3>yoyo</h3>
        </div>
        
    )
}