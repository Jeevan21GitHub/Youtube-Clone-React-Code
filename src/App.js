import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import NavBar from './components/NavBar'
import { useState } from 'react'


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('youtube');
  const [sideBarHidden,setSideBarHidden]=useState(false);
  return (
    
    <BrowserRouter>
      <NavBar setSideBarHidden={setSideBarHidden}  setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route path='/' element={<Home sideBarHidden={sideBarHidden} setSideBarHidden={setSideBarHidden} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
        <Route path='/video/:id' element={<Video sideBarHidden={sideBarHidden} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>} />
        <Route />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
