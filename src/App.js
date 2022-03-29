import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Login from "./comps/login.component";
import SignUp from "./comps/signup.component";

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route path="/sign-in" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;