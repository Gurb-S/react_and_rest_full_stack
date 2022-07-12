import React from 'react'
//import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CourseProvider } from './Context'

//CSS
import './styles/reset.css'
import './styles/global.css'


//Components
import { Courses } from './components/Courses';
import { Header } from './components/Header'
import { CourseDetail } from './components/CourseDetail'
//import { Home } from './components/Home'

function App() {

  // const [ data, setData ] = useState([]);
  // //console.log(res.data.courses)
  // const getData = async(endpoint = "courses") =>{
  //   setData([]);
  //   console.log(data)
  //   const url = `http://localhost:5000/api/${endpoint}`;
  //   console.log(url);
  //   await axios.get(url)
  //     .then(res => setData(res.data.courses))
  //     //.then(res => console.log(res.data.courses))
  //     .catch(err => console.log(err))
  // }

  // useEffect(() =>{
  //   getData();
  // }, [])

  return (
    <CourseProvider>
      <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Courses />} />
            <Route path='/courses/:id' element={<CourseDetail />} />
          </Routes>
      </Router>
    </CourseProvider>
  );
}

export default App;
