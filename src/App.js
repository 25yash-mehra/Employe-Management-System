import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// import Header from './components/Header';

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/singup' element={<Register/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
