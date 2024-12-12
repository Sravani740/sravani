import React from "react";
import Login from "./pages/login.signup/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/login.signup/Signup";
import HomePage from "./pages/HomePage/HomePage";
//const react = required("react")
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route Path="/Home" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};
export default App;