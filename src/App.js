import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Manageemp from './Pages/Manageemp';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Register/>}  />
          {/* <Route path='/dashboard' element={<Header/>} /> */}
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/manageemployee' element={<Manageemp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
