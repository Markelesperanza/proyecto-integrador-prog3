import React, { Component } from 'react';
import { options } from "../../options";

import './MoviesGrid.css';

class MoviesGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            error: null,
        };
    }


    componentDidMount() {
        const { url, options } = this.props;

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ movies: data.results });
            })
            .catch((error) => {
                this.setState({ error });
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { movies, error } = this.state;

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