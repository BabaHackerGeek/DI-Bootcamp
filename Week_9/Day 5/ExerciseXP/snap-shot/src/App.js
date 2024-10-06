import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './components/Gallery';
import Search from './components/Search';
import SearchBar from './components/SearchBar'; // Import SearchBar

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>SnapShot</h1>
          <SearchBar /> {/* Add the search bar */}
        </header>

        <nav>
          <ul className="categories">
            <li><Link to="/category/mountains">Mountains</Link></li>
            <li><Link to="/category/beaches">Beaches</Link></li>
            <li><Link to="/category/birds">Birds</Link></li>
            <li><Link to="/category/food">Food</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/category/:category" element={<Gallery />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
