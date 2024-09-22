import { Component } from 'react';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import { options } from '../options';

export class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            loading: true
        };
    }

    componentDidMount() {
        const apiKey = 'e5773be4334ee3e3ea4f8117babdc4f1'; 
        const { query } = this.props.location.state;
        const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=1`;
        
        this.setState({ loading: true });

        fetch(urlSearch, options)
            .then((response) => {
                console.log(response); 
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results,
                    loading: false
                });
            })
            .catch(error => {
                console.error('Error encontrando search results:', error);
                this.setState({ loading: false });
            });
    }


    render() {

        const { movies, loading } = this.state;

        return (
            <div>
                {!loading ? (<MoviesGrid movies={movies} />) : (<p>Loading...</p>)}
            </div>
        );
    }
}

export default SearchResults