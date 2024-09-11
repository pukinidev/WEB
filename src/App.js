import React from 'react';
import NewAppBar from './components/navigation/AppBar/AppBar';
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
        <NewAppBar />
        <Routes>
          <Route path={urls.home} element={<Home />} />
          <Route path={urls.login} element={<Login />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
