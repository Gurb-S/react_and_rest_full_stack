import React from "react";
import { getAllCourses, getCourse } from "./Data";
import { signInAuth } from "./authHandler";


export const CourseContext = React.createContext();

export function CourseProvider({ children }) {
    // const value = {
    //     actions: {
    //         getAllCourses: getAllCourses
    //     }
    // }
    return(
        <CourseContext.Provider value={{ getAllCourses, getCourse, signInAuth }}>
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