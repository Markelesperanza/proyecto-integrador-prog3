import { Component } from "react";
import MoviesCard from "../components/MoviesCard/MoviesCard";
import { options } from "../options";
import Loader from "../components/Loader/Loader";

class FavoriteMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaFavoritos: [],
            moviesDetail: [],
            loading: true,
            error: null,

        }
    }

    componentDidMount() {
        const localS = localStorage.getItem('localFavorite');
        const listaFavoritos = localS ? JSON.parse(localS) : [];
        const url = `https://api.themoviedb.org/3/movie/{id}?language=en-US`

        if(listaFavoritos.length > 0) {
            Promise.all(listaFavoritos.map(
                id => fetch(url, options)
                .then(res => res.json())
            ))
            .then(moviesDetails => {
                this.setState({ moviesDetails, loading: false });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
        } else {
            this.setState({ loading: false });
        }
            
    }
    
    render() {
        const {moviesDetail, error, loading} = this.state;

        if(loading) {
            return <Loader />;
        }
        if (error) {
            return <div>Error al cargar las películas favoritas: {error.message}</div>;
        }

        return(
            <div>
                {moviesDetail.length === 0 ? (
                    <p>Aún no tienes películas favoritas</p>
                ) : (
                    <div className="movies-grid">
                        {moviesDetail.map(movie => (
                            <MoviesCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}


export default FavoriteMovies;