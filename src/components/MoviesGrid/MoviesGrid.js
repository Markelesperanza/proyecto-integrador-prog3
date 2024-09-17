import React, { Component } from 'react';
import { options } from "../../options";
import './MoviesGrid.css';

class MoviesGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true, 
            error: null,
        };
    }

    componentDidMount() {
        const { url } = this.props;

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ 
                    movies: data.results, 
                    loading: false 
                });
            })
            .catch((error) => {
                this.setState({ 
                    error, 
                    loading: false 
                });
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { movies, loading, error } = this.state;

        if (loading) {
            return <div>Cargando películas...</div>; 
        }

        if (error) {
            return <div>Error al cargar las películas: {error.message}</div>;
        }

        return (
            <div className="movies-grid">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        );
    }
}

export default MoviesGrid;