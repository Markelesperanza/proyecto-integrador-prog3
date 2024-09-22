import { Component } from 'react'

import './SearchForm.css';

export class SearchForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value,
        });
    };

    handleInputSubmit = (event) => {
        event.preventDefault();
        console.log(this.props);
        this.props.history.push( '/search', { query: this.state.query });
    }



    render() {
        return (
            <>
                <form className="form" onSubmit={this.handleInputSubmit}>
                    <input
                        onChange={this.handleInputChange}
                        type="text"
                        name="query"
                        value={this.state.query}
                        placeholder="Buscar película"
                    />
                    <button type="submit" className="submit-button">Buscar Película</button>
                </form>
            </>
        )
    }
}

export default SearchForm