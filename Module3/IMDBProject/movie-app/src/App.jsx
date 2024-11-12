import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes , Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import WatchList from './Pages/WatchList/WatchList'
import Navbar from './Components/Navbar/Navbar'


function App() {

  const [watchList, setWatchList] = useState([]);

  const addToWatchList=(movieObj)=>{
    console.log("add to watchlist called",movieObj);
    setWatchList([...watchList, movieObj]);
  }


  const removeFromWatchList = (movieObj)=>{
    console.log("remove from watchlist called",movieObj);

    const filteredMovies = watchList.filter((watchListMovie)=>{
      return movieObj.id!==watchListMovie.id;
    })

    setWatchList(filteredMovies);

  }
  


  return (
    <div  >
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home  watchList={watchList} addToWatchList={addToWatchList} 
      removeFromWatchList={removeFromWatchList}  
      />} />
      <Route path='/watchlist' element={<WatchList watchList={watchList} />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
