import { Component } from "react";
import { options } from "../../options";

class Detalle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: null
        }
    }

    componentDidMount() {
        const { id } = this.props;
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                this.setState({ movie: data });
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }

    render() {
        const { movie } = this.state;

            if(!movie) {
                return <div>Loading...</div>;
            }

        return (
            <div>
                {/* <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} /> */}
                <h2>{movie.title}</h2>
            </div>

        );
    };

}

export default Detalle;