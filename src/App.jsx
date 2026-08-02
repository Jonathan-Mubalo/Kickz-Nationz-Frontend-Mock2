import React, { useState, useEffect, useContext } from 'react';
import Login from "./pages/Login.jsx";
import LoginContextProvider from "./context/LoginContextProvider.jsx";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products.jsx"
import Home from "./pages/Home.jsx"
import ProtectedRoutes from './authentication/ProtectedRoutes.jsx';
import Signup from "./pages/Signup.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";



function App() {


  return (

    <>
      <LoginContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
            } />
            <Route path="/Products" element={<ProtectedRoutes>
              <Products />
            </ProtectedRoutes>} />
          </Routes>
        </BrowserRouter>
      </LoginContextProvider>

    </>
  )
}

export default App;
