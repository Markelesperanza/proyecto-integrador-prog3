import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

class Header extends Component {
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
