import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//CSS
import './styles/reset.css'
import './styles/global.css'


//Components
import { Courses } from './components/Courses';
import { Header } from './components/Header'
import { CourseDetail } from './components/CourseDetail'

function App() {

  const [ data, setData ] = useState([]);
  //console.log(res.data.courses)
  const getData = async(endpoint = "courses") =>{
    setData([])
    const url = `http://localhost:5000/api/${endpoint}`;
    await axios.get(url)
      .then(res => setData(res.data.courses))
      //.then(res => console.log(res.data.courses))
      .catch(err => console.log(err))
  }

  useEffect(() =>{
    getData();
  }, [])

  return (
    <Router>
        <Header />
        <Routes>
          {/* <Route path='/' element={} /> */}
          <Route path='/courses' element={<Courses data={data}/>} />
          <Route path='/courses/:id' element={<CourseDetail whenClicked={getData} data={data}/>} />
        </Routes>
    </Router>
    
  );
}

export default App;
