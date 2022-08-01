import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route path="*" element={<h2>Error... Page not found.</h2>}></Route>
      </Routes>
  </BrowserRouter>
  </>;
}

export default App;
