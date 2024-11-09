import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes , Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import WatchList from './Pages/WatchList/WatchList'
import Navbar from './Components/Navbar/Navbar'


function App() {

  return (
    <div  >
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/watchlist' element={<WatchList/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
