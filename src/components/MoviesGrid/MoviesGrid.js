import React, { Component } from 'react';
import { options } from "../../options";
import MoviesCard from '../MoviesCard/MoviesCard';
import Loader from '../Loader/Loader';
import './MoviesGrid.css';

class MoviesGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filteredMovies: [],
            searchQuery: '',
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


        
    };
    handleInputChange = (event) => {
        const searchQuery = event.target.value.toLowerCase(); // Convertir a minúsculas para coincidencias insensibles a mayúsculas
        this.setState({ searchQuery }, this.filterMovies); // Después de actualizar el estado, filtrar las películas
    };

    filterMovies = () => {
        const { movies, searchQuery } = this.state;
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery) // Coincidencia parcial en el título
        );
        this.setState({ filteredMovies });
    };

    cargarMasPelis = () => {
        const { url } = this.props;
        const { currentPage, movies } = this.state;
    
        fetch(`${url}&page=${currentPage + 1}`, options)
            .then((response) => response.json())
            .then((data) => {
                
                const pelisActualizado = [];
                movies.map((movie) => pelisActualizado.push(movie));
    
                data.results.map((result) => pelisActualizado.push(result));
    
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
        const { movies, loading, error, filteredMovies, searchQuery, } = this.state;

        if (loading) {
            return <Loader/>;
        }

        if (error) {
            return <div>Error al cargar las películas: {error.message}</div>;
        }

        return (
            <>
                <div className="filter">
                    <label>Filtra películas por nombre: </label>
                    <input 
                        type="text" 
                        value={searchQuery} 
                        onChange={this.handleInputChange} 
                        placeholder="Escribe para buscar películas..." 
                    />
                </div>
                <div className="movies-grid">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie, index) => (
                            <MoviesCard key={index} movie={movie} />
                        ))
                    ) : (
                        <p>No se encontraron películas que coincidan con la búsqueda.</p>
                    )}
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