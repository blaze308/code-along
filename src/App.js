import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogList from "./pages/BlogList"
import Navbar from './components/navbar/Navbar'
import BlogDetail from "./pages/BlogDetail"

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path='blog' element={<Blog/>}>
            <Route path="" element={<BlogList/>}/>
            <Route path=":blog" element={<BlogDetail/>}/>
            </Route>       
        </Routes>
    </BrowserRouter>
  )
}

export default App