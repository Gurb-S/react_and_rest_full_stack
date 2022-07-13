import React from "react";

export function Header() {
    
    // TODO: add link to sign up page
    // TODO: make nav switch to signout and username when logged in
    return(
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><a href="/">Courses</a></h1>
                <nav>
                    <ul className="header--signedout">
                        <li><a href="sign-up.html">Sign Up</a></li>
                        <li><a href="/signin">Sign In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}