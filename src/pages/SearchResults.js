import { Component } from 'react';
import Loader from '../components/Loader/Loader';
import { options } from '../options';
import MoviesCard from '../components/MoviesCard/MoviesCard';
import '../../src/components/MoviesGrid/MoviesGrid.css'

class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moviesSearch: [],
            loading: true
        };
    }

    componentDidMount() {

        const urlSearch = `https://api.themoviedb.org/3/search/movie?&language=en-US&query=${this.props.location.state.query}&page=1`;


        this.setState({ loading: true });

        fetch(urlSearch, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.results) {
                    this.setState({ moviesSearch: data.results, loading: false });
                } else {
                    console.error('No se encuentran películas');
                }
            })

            .catch(error => {
                console.error('Error encontrando search results:', error);
                this.setState({ loading: false });
            });
    }


    render() {
        const { loading, moviesSearch, error } = this.state;

        return (
            <>
                <section>
                    <p>Resultado de búsqueda: {this.props.location.state.query}</p>
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <div>Error al cargar los resultados: {error.message}</div>
                    ) : moviesSearch.length > 0 ? (
                        <div className="results-grid">
                            {moviesSearch.map((movie, index) => (
                                <MoviesCard key={index} className="result-card" movie={movie} />
                            ))}
                        </div>) : (
                        <p>No se encontraron películas que coincidan con la búsqueda.</p>
                    )}
                </section>
            </>
        );
    }
}

export default SearchResults