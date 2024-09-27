import { useState } from 'react'
import './App.css'

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component

// HomeScreen component
function HomeScreen() {
  return <h1>Home</h1>;
}

// ProfileScreen component
function ProfileScreen() {
  return <h1>Profile Screen</h1>;
}

// ShopScreen component (intentionally throws an error)
function ShopScreen() {
  throw new Error('Something went wrong in the Shop screen!');
}

function App() {
  return (
    <BrowserRouter>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/profile" className="nav-link ms-4">Profile</NavLink>
          <NavLink to="/shop" className="nav-link ms-4">Shop</NavLink>
        </div>
      </nav>

      {/* Routes with ErrorBoundary */}
      <Routes>
        <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
