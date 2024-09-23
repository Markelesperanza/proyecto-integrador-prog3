import { Component } from "react";
import { options } from "../../options";
import Loader from "../Loader/Loader";
import ButtonFav from "../ButtonFav/ButtonFav";

class DetalleMovie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
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

        if (!movie) {
            return <Loader />;
        }

        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.vote_average}/10</p>
                <p>Géneros:</p>
                <ul>
                    {movie.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
                <ButtonFav pelicula={movie.id} />
            </div>

        );
    };

}

export default DetalleMovie;