import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <header className="header">
          <div className="logo">
            <h1>My Movie App</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favoritos">Favoritos</Link></li>
              <li><Link to="/all-movies">Ver todas</Link></li>
            </ul>
          </nav>
        </header>
    
  );
};

export default Header;
