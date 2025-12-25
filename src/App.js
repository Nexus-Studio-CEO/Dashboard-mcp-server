import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MCP from './pages/MCP';
import MCPManager from './components/MCPManager';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mcpData, setMcpData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('mcpData');
    if (storedData) {
      setMcpData(JSON.parse(storedData));
    }
  }, []);

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setMcpData(data);
    localStorage.setItem('mcpData', JSON.stringify(data));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMcpData({});
    localStorage.removeItem('mcpData');
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mcp" element={<MCP mcpData={mcpData} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;