import React, { Component } from 'react';
import './MoviesCard.css';
import ButtonFav from '../ButtonFav/ButtonFav';

class MoviesCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false,
    };
  }

  toggleDescription = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription
    }));
  };

  render() {
    const { movie } = this.props;
    console.log(movie);
    
    const { showDescription } = this.state;

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

        <ButtonFav pelicula={movie.id} />
      </div>
    );
  }
}

export default MoviesCard;
