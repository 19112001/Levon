import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ViewPage from './components/ViewPage';
import './App.css';


function App() {
  const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '', operator: '' });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register setUserDetails={setUserDetails} />} />
        <Route path="/login" element={<Login userDetails={userDetails} />} />
        <Route path="/welcome" element={<ViewPage userDetails={userDetails} />} />
      </Routes>
    </Router>
  );
}

export default App;
