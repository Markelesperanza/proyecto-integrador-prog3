import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <header className="header">
          <div className="logo">
            <img src="/image/logo.png" alt="Logo de la aplicación" className="logo-image" />
            <h1 className="app-title"> MoviesWatch </h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favoritos">Favoritos</Link></li>
            </ul>
            <form action="" method="GET" className="form">
                <input type="text" name="" placeholder="Buscar Peliculas" />
                <button type="submit">Buscar</button>
            </form>

          </nav>
        </header>
    
  );
};

export default Header;
