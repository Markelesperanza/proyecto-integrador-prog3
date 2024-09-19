import React, { Component } from 'react';
import { options } from "../../options";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesGrid.css';

class MoviesGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            selectedGenre: '',
            loading: true,
            error: null,
            currentPage: 1,
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


        const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en-US`;

        fetch(genresUrl, options)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    genres: data.genres,
                });
            })
            .catch((error) => {
                console.error('Error encontrando genres:', error);
            });

    }

    componentDidUpdate(prevProps, prevState) {
        const { url } = this.props;
        const { selectedGenre } = this.state;

        if (prevState.selectedGenre !== selectedGenre) {
            const nuevoUrl = selectedGenre
                ? `${url}&with_genres=${selectedGenre}`
                : url;

            fetch(nuevoUrl, options)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ movies: data.results });
                })
                .catch((error) => {
                    this.setState({ error });
                    console.error('Error al actualizar las películas:', error);
                });
        }
    }


    GenreChange = (event) => {
        const selectedGenre = event.target.value;
        this.setState({ selectedGenre });


    };

    cargarMasPelis = () => {
        const { url } = this.props;
        const { currentPage, movies } = this.state;

        fetch(`${url}&page=${currentPage + 1}`, options)
            .then((response) => response.json())
            .then((data) => {

                const pelisActualizado = [];
                for (let i = 0; i < movies.length; i++) {
                    pelisActualizado.push(movies[i]);
                }
                for (let i = 0; i < data.results.length; i++) {
                    pelisActualizado.push(data.results[i]);
                }

                this.setState({
                    movies: pelisActualizado,
                    currentPage: currentPage + 1,
                });
            })
            .catch((error) => {
                this.setState({
                    error,
                });
                console.error('Error al cargar más películas:', error);
            });
    };

    render() {
        const { movies, genres, loading, error, selectedGenre } = this.state;

        if (loading) {
            return <div>Cargando películas...</div>;
        }

        if (error) {
            return <div>Error al cargar las películas: {error.message}</div>;
        }

        return (
            <>
                <div className="filter">
                    <form>
                        <label>Filtrar por género: </label>
                        <select value={selectedGenre} onChange={this.GenreChange}>
                            <option value="">Todos los géneros</option>
                            {genres.map((genre, index) => (
                                <option key={index} value={genre.id}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                        <Link to={`/filter/${selectedGenre}`}>
                            <button type="button" disabled={!selectedGenre}>
                                Filtrar
                            </button>
                        </Link>
                    </form>
                </div>
                <div className="movies-grid">
                    {movies.map((movie, index) => (
                        <MoviesCard key={index} movie={movie} />

                    ))}
                </div>

                <div className="load-more-container">
                    <button onClick={this.cargarMasPelis} className="load-more-button">
                        Cargar más
                    </button>
                </div>
            </>
        );
    }
}

export default MoviesGrid;