import React, { useState } from 'react';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100'}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Home />
    </div>
  );
}

export default App;
