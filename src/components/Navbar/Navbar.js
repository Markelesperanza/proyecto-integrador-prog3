import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


class Navbar extends Component {
  componentDidMount() {
    // Verifica si 'history' se está recibiendo correctamente en props
    console.log('Header props:', this.props);
    console.log('Header history:', this.props.history);
}
  

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
              <li><Link to="/favorite-movies">Favoritos</Link></li>
              <li><Link to="/all-popular-movies">Películas más populares</Link></li>
              <li><Link to="/all-cartelera-movies">Películas en cartel</Link></li>

            </ul>

          </nav>
        </header>
      </>

    )
  };
};

export default Navbar;