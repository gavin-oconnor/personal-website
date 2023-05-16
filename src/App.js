import React from 'react'
import { Header } from './Components/Header'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Blog from './Components/Blog'

const App = () => {
  return (
    <div>
      <Header/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App