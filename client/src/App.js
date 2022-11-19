import React from 'react';
import {BrowserRouter, Routes,Route } from "react-router-dom"
import './App.css';

import Nav from './components/common/Nav';
import Dashboard from './components/dashboard/Dashboard';

function App() {


  return (
    <>
      <div className="wrapper">

        <BrowserRouter>
            <Nav />
          
          <Routes>
            <Route path = "/" element = {<Dashboard/>}/>
            <Route path = "/employees" element = {<>Employees</>}/>
            <Route path = "/help" element = {<>Help</>}/>
          </Routes>
        </BrowserRouter>
      
      </div>
    </>
  );
}

export default App;
