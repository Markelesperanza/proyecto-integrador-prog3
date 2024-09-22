import { Component } from 'react';

export class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moviesSearch: [],
            loading: true
        };
    }

    componentDidMount() {
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiJlNTc3M2JlNDMzNGVlM2UzZWE0ZjgxMTdiYWJkYzRmMSIsIm5iZiI6MTcyNTkwOTc2MC41OTIzNzQsInN1YiI6IjY2ZGY0OTJjYmUyMWY5MmNkYTllMDE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GNaZ7hdiLbaBBVkUQA-EMkfBR99B4KgButNe_pVOWUk';

        const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.props.location.state.query}&page=1`;

        
        this.setState({ loading: true });

        fetch(urlSearch)
            .then((response) => {
                console.log(response); 
                return response.json();
            })
            .then((data) => {
                console.log(data)
            if (data.results) {
                this.setState({ searchMovie: data.results });
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


        return (
            <>
                <section>
                <p>Resultado de búsqueda: {this.props.location.state.query}</p>

            </section>

            </>
        );
    }
}

export default SearchResults