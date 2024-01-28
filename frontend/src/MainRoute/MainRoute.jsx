import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../component/Home/Home'
import Services from '../component/services/Services'



const MainRoute = () => {
  return (
  <Routes>
          <Route path="/" element={ <Home />} /> 
          <Route path="/services" element={ <Services />} /> 
  </Routes>
  )
}

export default MainRoute