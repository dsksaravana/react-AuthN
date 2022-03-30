import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import SignUp from "./pages/signup";
import Dashboard from './comps/dash';

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route exact path='/sign-in' element={<Login />} />
            <Route exact path='/' element={<Login />} />
            <Route path="/dash" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;