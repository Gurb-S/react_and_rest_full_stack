import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CourseProvider } from './context/Context';
import 'react-toastify/dist/ReactToastify.css';

//CSS
import './styles/reset.css'
import './styles/global.css'


//Components
import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { CourseDetail } from './components/CourseDetail';
import { UserSignIn } from './components/UserSignIn';
import { UserSignOut } from './components/UserSignOut';
import { PrivateRoute } from './context/PrivateRoute';
import { UpdateCourse } from './components/UpdateCourse';

function App() {
  return (
      <CourseProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Courses />} />
            <Route path='/courses/:id' element={<PrivateRoute><CourseDetail /></PrivateRoute>} />
            <Route path='/courses/:id/update' element={<PrivateRoute><UpdateCourse /></PrivateRoute>} />
            <Route path='/signin' element={<UserSignIn />} />
            <Route path='/signout' element={<UserSignOut />} />
          </Routes>
        </Router>
      </CourseProvider>
  );
}

export default App;
