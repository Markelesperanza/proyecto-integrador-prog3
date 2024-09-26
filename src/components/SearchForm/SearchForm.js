import { Component } from 'react'

import './SearchForm.css';

export class SearchForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value,
        });
    };

    handleInputSubmit = (event) => {
        const {query} = this.state;

        if(query){
            this.props.history.push('/search', { query });
        };
        
    };



    render() {

        return (
            <>
                    <input
                        onChange={(e)=>this.handleInputChange(e)}
                        type="text"
                        name="query"
                        value={this.state.query}
                        placeholder="Buscar película"
                    />
                    <button onClick={()=>this.handleInputSubmit()}  className="submit-button">Buscar Película</button>
            </>
        )
    }
}

export default SearchForm