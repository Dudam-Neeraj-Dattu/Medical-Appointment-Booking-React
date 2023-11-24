import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        {/* <Landing_Page /> */}
        <Routes>
          <Route path="/Home" element={<Landing_Page />} />
          <Route path='/Sign_Up' element={<Sign_Up />} />
          <Route path='/Login' element={<Login />} />
        </Routes>

      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <Landing_Page />    */}
      {/* <Login />   
      <Sign_Up /> */}
    </div>
  );
}

export default App;
