import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//CSS
import './styles/global.css'
import './styles/reset.css'


//Components
import { Courses } from './components/Courses';

function App() {

  const [ data, setData ] = useState([]);
  //console.log(res.data.courses)
  const getData = async() =>{
    const url = 'http://localhost:5000/api/courses';
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
      <div className="container">
        {/* {data.map( course => (
          <h1>{course.title}</h1>
        ))} */}
        <Routes>
          <Route path='/' element={<Courses data={data}/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
