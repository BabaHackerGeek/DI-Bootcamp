import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

const Content: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <ThemeSwitcher />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

export default App;
