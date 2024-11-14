import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes , Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import WatchList from './Pages/WatchList/WatchList'
import Navbar from './Components/Navbar/Navbar'


export const WatchListContext = React.createContext();



function App() {

  const [watchList, setWatchList] = useState(getWatchListFromStorage());


  useEffect(()=>{
    localStorage.setItem("watchList",JSON.stringify(watchList));
  },[watchList])


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

  function getWatchListFromStorage(){

    const watchListFromStorage = JSON.parse(localStorage.getItem("watchList"));

    if(watchListFromStorage==null){
      return [];
    }

    return watchListFromStorage;

  }


  return (
    <div  >
      <WatchListContext.Provider  value={{watchList, addToWatchList, removeFromWatchList}}  >
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home  />} />
      <Route path='/watchlist' element={<WatchList  />} />
     </Routes>
     </BrowserRouter>
      </WatchListContext.Provider>
    </div>
  )
}

export default App
