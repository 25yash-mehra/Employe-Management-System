import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Register/>}  />
          <Route path='/home' element={<Header/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
