import React from 'react'
import Home from './Home/home.jsx'
import { Route, Routes } from "react-router-dom"
import Course from './course/Courses.jsx'
import Signup from './components/Signup.jsx'


const App = () => {
  return (
    <>

    <div className='dark:bg-white dark:text-black'>
    <Routes>
      <Route path='/'  element = {<Home/>} />
      <Route path='/course' element = {<Course/>} /> 
      <Route path='/signup' element = {<Signup/>} /> 
    </Routes>
    </div>

   </>

  )
}

export default App
