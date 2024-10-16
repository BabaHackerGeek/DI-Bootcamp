import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import CharacterCounter from './components/CharacterCounter';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

const Content: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <ThemeSwitcher />
      <CharacterCounter />
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
