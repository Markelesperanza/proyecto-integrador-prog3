import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

class Header extends Component {
  

  render() {
    return (
      <>
        <header className="header" >
          <div className="logo">
            <img src="/image/logo.png" alt="Logo de la aplicación" className="logo-image" />
            <h1 className="app-title"> MoviesWatch </h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favoritos">Favoritos</Link></li>
            </ul>

            <SearchForm history={this.props.history} />

          </nav>
        </header>
      </>

    )
  };
};

export default Header;
