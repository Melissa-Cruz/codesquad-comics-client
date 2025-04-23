import "./App.css";
import React from "react"; // it's not in the directions but it's in the demo
import { useState } from "react";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Routes, Route } from "react-router-dom";
// import { setuid } from 'process'

function App() {
  // const [count, setCount] = useState(0)

  // The initial value will be retrieved from localStorage a variable named "user" OR an empty object.
  const [user, setUser] = useState(localStorage.getItem("user") || {});
  // console.log(localStorage.user)

  return (
    <>
      <div className="App">
        {/* Pass down the user and setter function to the following components as a prop: Header, Login, Signup, <- pretty sure I'm doing this wrong  */}
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create" element={<Create />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/update" element={<Update />} />
          <Route
            path="/signup"
            element={<Signup user={user} setUser={setUser} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
