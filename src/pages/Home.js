import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import HomeMovies from '../components/HomeMovies/HomeMovies'; 
import SearchForm from '../components/SearchForm/SearchForm';

class Home extends Component {

  constructor(props) {
      super(props);

      this.state = {
        isLoading: true
      }
  
    }
    componentDidMount(){
      this.setState({
        isLoading: true
      })
  
    }
  
    handleRedirect(){
    this.props.history.push('/search', {id:10})
    }
      

  render() {
  return (
    <section>
      <h1>Películas</h1>
      <SearchForm history={this.props.history} />
      <h2> Peliculas Populares </h2>
      <HomeMovies url = "https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" />
      <Link to="/all-popular-movies">
        <button className="view-all-button">Ver todas</button>
      </Link>
      
      <h2> Peliculas En Cartelera </h2>
      <HomeMovies url = "https://api.themoviedb.org/3/movie/now_playing?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" />\
      <Link to="/all-cartelera-movies">
        <button className="view-all-button">Ver todas</button>
      </Link>
    </section>
  );
}
}

export default Home;
