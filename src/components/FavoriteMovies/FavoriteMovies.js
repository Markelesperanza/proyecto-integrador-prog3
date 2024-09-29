import React, { Component } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { options } from '../../options';

class FavoriteMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: [],
    };
  }

  componentDidMount() {
    this.loadFavoriteMovies();
  }

  loadFavoriteMovies = () => {
    const favoriteIds = JSON.parse(localStorage.getItem('localFavorite')) || [];
    const moviePromises = favoriteIds.map(id => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      return fetch(url, options).then(response => response.json());
    });

    Promise.all(moviePromises)
      .then(movies => {
        this.setState({ favoriteMovies: movies });
      })
      .catch(error => console.error('Error fetching favorite movies:', error));
  };

  render() {
    const { favoriteMovies } = this.state;

    return (
      <div className="favorite-movies">
        <div className="movies-list">
          {favoriteMovies.length > 0 ? (
            favoriteMovies.map(movie => (
              <MoviesCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No hay películas favoritas.</p>
          )}
        </div>
      </div>
    );
  }
}

export default FavoriteMovies;
