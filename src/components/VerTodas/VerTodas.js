import React, { Component } from 'react';
import { options } from '../../options';

class VerTodas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [], // Para almacenar los contenidos obtenidos
            filter: '',   // Para el valor del filtro
        };
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie?language=en-US`;

        fetch(url, options)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    contents: data.results,
                }))
            .catch(e => {
                console.log(e);
            });
    }

    handleFilterChange = (event) => {
        this.setState({
            filter: event.target.value
        });
        ;
    }

    evitarSubmit = (event) => {
        event.preventDefault();
        console.log("Filtro aplicado:", this.state.filter);
    }

    render() {
        const { contents, filter } = this.state;

        const filtradoDeContenidos = contents.filter(content =>
            content.title.toLowerCase() === filter.toLowerCase()
        );

        return (
            <div>
                <form onSubmit={this.evitarSubmit}>
                    <input type="text" value={filter} placeholder="Filtrar contenido" />
                    <button type="submit">Buscar</button>
                </form>



                {filtradoDeContenidos.length === 0 && <div>No hay contenidos disponibles</div>}

                {filtradoDeContenidos.map((content, index) => (
                    <div key={index}> <h3>{content.title}</h3> <p>{content.overview}</p> </div>
                ))}
            </div>

        )
    };

}

export default VerTodas;