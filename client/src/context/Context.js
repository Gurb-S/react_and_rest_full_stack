import React, { useState } from "react";
import Cookies from "js-cookie";
import { getAllCourses, getCourse, getUser } from "./Data";
//import { signInAuth } from "./authHandler";


export const CourseContext = React.createContext();

export function CourseProvider({ children }) {
    // const value = {
    //     actions: {
    //         getAllCourses: getAllCourses
    //     }
    // }
    const [ authenticatedUser, setAuthenticatedUser ] = useState('');

    const signInAuth = async(username, password) => {
      console.log(username);
      console.log(password);
      const user = await getUser(username,password);
      if(user !== null){
        setAuthenticatedUser(user)
        const cookieOptions = {
          expires: 1 //1 day
        };
        Cookies.set('authenticatedUser', JSON.stringify(user), {cookieOptions})
      }
      return user;
    }
    return(
        <CourseContext.Provider value={{ getAllCourses, getCourse, signInAuth, authenticatedUser }}>
            {children}
        </CourseContext.Provider>
    )

    
}

export default CourseContext;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

 export function withContext(Component) {
    return function ContextComponent(props) {
      return (
        <CourseContext>
          {context => <Component {...props} context={context} />}
        </CourseContext>
      );
    }
  }
  
  //export default {withContext, Context}