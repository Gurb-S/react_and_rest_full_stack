import React from "react";
import { getCourses } from "./Data";


export const CourseContext = React.createContext();

export function CourseProvider({ children }) {
    // const value = {
    //     actions: {
    //         getCourses: getCourses
    //     }
    // }
    return(
        <CourseContext.Provider value={{ getCourses }}>
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