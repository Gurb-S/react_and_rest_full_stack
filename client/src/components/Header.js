import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseContext from "../context/Context";

export function Header() {
    
    //import from context api
    const { authenticatedUser } = useContext(CourseContext);

    return(
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><a href="/">Courses</a></h1>
                <nav>
                    { authenticatedUser ? (
                        <ul className="header--signedin">
                            <li>Welcome, {authenticatedUser.firstName} {authenticatedUser.lastName}!</li>
                            <li>
                                <Link to="/signout">Sign Out</Link>
                            </li>
                        </ul>
                    ) :(
                        <ul className="header--signedout">
                            <li><a href="/signup">Sign Up</a></li>
                            <li><a href="/signin">Sign In</a></li>
                        </ul>
                    )}

                </nav>
            </div>
        </header>
    )
}