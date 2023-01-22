import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import "./index.tailwind.css"
import "../src/assets/main.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
