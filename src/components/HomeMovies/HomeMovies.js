import React, { Component } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'; 
import "./HomeMovies.css"

class HomeMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],   
      error: '',        
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  
  fetchMovies = () => {
    fetch(this.props.url) 
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          this.setState({ movies: data.results.slice(0, 5) 
          }); 
        } else {
          this.setState({ 
            movies: [] 
          });
        }
      })
      .catch((error) => this.setState({ 
        error: 'Error al cargar las películas' 
      })
    );
  };

  render() {
    const { movies, error } = this.state;

    return (
      <div className="home-movies">
        <div className="movies-list">
          {movies.length > 0 ? (
            movies.map((movie) => 
            <MoviesCard key={movie.id} movie={movie} />)
          ) : (
            <p>No se encontraron películas.</p>
          )}
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
}

export default HomeMovies;
