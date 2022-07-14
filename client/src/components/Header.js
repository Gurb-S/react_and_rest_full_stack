import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseProvider from "../context/Context";
export function Header() {
    
    // // TODO: add link to sign up page
    // TODO: make nav switch to signout and username when logged in
    // * Link for user signout page has already been added

    const { authenticatedUser } = useContext(CourseProvider);

    return(
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><a href="/">Courses</a></h1>
                <nav>
                    { authenticatedUser ? (
                        <ul className="header--signedin">
                            <li>Welcome, {authenticatedUser.firstName} {authenticatedUser.lastName}</li>
                            <li>
                                <Link to="/signout">Sign Out</Link>
                            </li>
                        </ul>
                    ) :(
                        <ul className="header--signedout">
                            <li><a href="sign-up.html">Sign Up</a></li>
                            <li><a href="/signin">Sign In</a></li>
                        </ul>
                    )}

                </nav>
            </div>
        </header>
    )
}