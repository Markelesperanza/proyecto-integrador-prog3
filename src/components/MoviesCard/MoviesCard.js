import React, { Component } from 'react';
import './MoviesCard.css';

class MoviesCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false,
      isFavorite: false
    };
  }

  toggleDescription = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription
    }));
  };

  toggleFavorite = () => {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite
    }));
  };

  render() {
    const { movie } = this.props;
    const { showDescription, isFavorite } = this.state;

    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          className="movie-image"
        />

        <h3>{movie.title}</h3>

        {showDescription && <p>{movie.overview}</p>}

        <button onClick={this.toggleDescription}>
          {showDescription ? 'Ocultar descripción' : 'Ver descripción'}
        </button>

        <button>
          <a href={`/detalle/${movie.id}`}>Ir a detalle</a>
        </button>

        <button onClick={this.toggleFavorite}>
          {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
    );
  }
}

export default MoviesCard;
