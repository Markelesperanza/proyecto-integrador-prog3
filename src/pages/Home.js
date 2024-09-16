import React from 'react';
import HomeMovies from '../components/HomeMovies/HomeMovies'; 

const Home = () => {
  return (
    <section>
      <h1>Películas</h1>
      <h2> Peliculas Populares </h2>
      <HomeMovies url = "https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" />
      <h2> Peliculas En Cartelera </h2>
      <HomeMovies url = "https://api.themoviedb.org/3/movie/top_rated?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" />
    </section>
  );
}

export default Home;
