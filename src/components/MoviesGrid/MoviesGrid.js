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
                    filteredMovies: data.results, 
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
    handleInputChange = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        this.setState({ searchQuery }, this.filterMovies);
    };

    filterMovies = () => {
        const { movies, searchQuery } = this.state;
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery)
        );
        this.setState({ filteredMovies });
    };

    handleResetFilter(){
        this.setState({
            searchQuery: "",
            filteredMovies:this.state.movies
        })

    }






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
                    filteredMovies: pelisActualizado, 

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
        const { loading, error, filteredMovies, searchQuery } = this.state;

        if (loading) {
            return <Loader />;
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
                        onChange={(e)=>this.handleInputChange(e)}
                        placeholder="Escribe para buscar películas..."
                    />
                </div>
                <button onClick={()=>this.handleResetFilter()}>Resetea el filtro</button>

                <div className="movies-grid">
                    {filteredMovies.length === 0 ? (
                        <p>No se encontraron películas que coincidan con la búsqueda.</p>

                    ) : (
                        filteredMovies.map((movie, index) => (
                            <MoviesCard key={index} movie={movie} />
                        ))
                    )
                    }
                </div>
               

                <div className="load-more-container">
                    <button onClick={()=>this.cargarMasPelis()} className="load-more-button">
                        Cargar más
                    </button>
                </div>
            </>
        );
    }
}

export default MoviesGrid;