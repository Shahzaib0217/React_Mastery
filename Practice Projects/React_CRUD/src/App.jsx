import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import UserDetails from "./components/UserDetails";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
