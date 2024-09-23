import { Component } from "react";

class ButtonFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
        }
    };
    
    componentDidMount() {
        const localS = localStorage.getItem('localFavorite');
        if (localS) {
            const favTrue = JSON.parse(localS).includes(this.props.pelicula);
            this.setState({
                favorite: favTrue
            });
        }
    };

    favAgregar = () => {
        const localS = localStorage.getItem('localFavorite')
        let parsedArray = localS ? JSON.parse(localS) : [];
        if(!parsedArray.includes(this.props.pelicula)) {
            parsedArray.push(this.props.pelicula);
            localStorage.setItem('localFavorite', JSON.stringify(parsedArray));
            this.setState({ favorite: true });

        }
    };

    favEliminar = () => {
        const localS = localStorage.getItem('localFavorite');
        if(localS) {
            let parsedArray = JSON.parse(localS);
            parsedArray = parsedArray.filter(id => id !== this.props.pelicula);
            localStorage.setItem('localFavorite', JSON.stringify(parsedArray));
            this.setState({ favorite: false });
        }
    };

    render() {
        return(
            <button onClick={() => this.state.favorite ? this.favEliminar() : this.favAgregar()}>
                {this.state.favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'} 
            </button>
            
        );
    }
}

export default ButtonFav;