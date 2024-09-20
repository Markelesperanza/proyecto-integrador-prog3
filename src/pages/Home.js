import React from 'react';
import { Link } from 'react-router-dom';
import HomeMovies from '../components/HomeMovies/HomeMovies'; 

const Home = () => {
  return (
    <section>
      <h1>Películas</h1>
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

export default Home;
