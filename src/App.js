import React from 'react';
import CustomAppBar from './components/navigation/AppBar/CustomAppBar'; 
import './App.css';
import Home from './components/pages/Home/Home';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';

const urls = {
  'home': "/",
  'login': "/login",
  'signup': "/signup",
};

function App() {
  return (
      <BrowserRouter>
        <CustomAppBar />
        <Routes>
          <Route path={urls.home} element={<Home />} />
          <Route path={urls.login} element={<Login />} />
          <Route path={urls.signup} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
