import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blog" element={<Blog/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App