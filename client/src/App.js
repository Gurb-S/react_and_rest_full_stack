import React, { useEffect, useState} from 'react'
import axios from 'axios'

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
    <div className="container">
      {data.map( course => (
        <h1>{course.title}</h1>
      ))}
    </div>
  );
}

export default App;
