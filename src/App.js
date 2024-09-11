import React from 'react';
import CustomAppBar from './components/navigation/AppBar/CustomAppBar'; 
import './App.css';
import Home from './components/pages/Home/Home';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/pages/Login/Login';

const urls = {
  'home': "/",
  'login': "/login",
  'register': "/signup",
};

function App() {
  return (
      <BrowserRouter>
        <CustomAppBar />
        <Routes>
          <Route path={urls.home} element={<Home />} />
          <Route path={urls.login} element={<Login />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
