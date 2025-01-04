import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SingleMovie from './pages/SingleMovie/SingleMovie';
import BookShow from './pages/BookShow/BookShow';


function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/movie/:id' element={<SingleMovie/>} />
        <Route path='/movie/:movieId/book-show/:showId' element={<BookShow/>} />

      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
