import React, {  useState } from "react";
import Cookies from "js-cookie";
import { getAllCourses, getCourse, getUser, updateCourse, createUser, createCourse, deleteCourse } from "./Data";


export const CourseContext = React.createContext();

export function CourseProvider({ children }) {

    //Set cookies
    const authCookie = Cookies.get('authenticatedUser');
    const userCookie = Cookies.get('userCreds')

    //Set states
    const [ authenticatedUser, setAuthenticatedUser ] = useState(() => ( authCookie ? JSON.parse(authCookie) : null));
    const [ userCreds, setUserCreds ] = useState(() => (userCookie ? JSON.parse(userCookie) : null))

    //sign in authentication that sets the cookies
    const signInAuth = async(username, password) => {
      const creds = { username, password }
      const user = await getUser(username,password);
      if(user !== null){
        setAuthenticatedUser(user)
        setUserCreds(creds)
        const cookieOptions = {
          expires: 1, //1 day
          secure: true,  
          sameSite: "None"
        };
        Cookies.set('authenticatedUser', JSON.stringify(user), cookieOptions);
        Cookies.set('userCreds', JSON.stringify(creds), cookieOptions);
      }
      return user;
    }

    //sign out function that removies cookies and resets states
    const signOut = async() => {
      setAuthenticatedUser(null);
      setUserCreds(null);
      Cookies.remove('authenticatedUser');
      Cookies.remove('userCreds');
    }

    //context provider that provides all the functions
    return(
        <CourseContext.Provider value={{ getAllCourses, getCourse, signInAuth, signOut, updateCourse, authenticatedUser, createUser, createCourse, deleteCourse, userCreds }}>
            {children}
        </CourseContext.Provider>
    )

    
}

export default CourseContext;