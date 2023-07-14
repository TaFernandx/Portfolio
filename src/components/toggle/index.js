import React, { useState } from 'react';

const DarkModeToggle = ({ onClick }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    onClick(theme); // Call the onClick function with the current theme
  };

  return (
    <button onClick={toggleTheme}>
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
