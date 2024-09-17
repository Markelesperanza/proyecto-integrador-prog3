import React from 'react';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';

const FilterGenre = ({ match }) => {
    const genreId = match.params.genreId; 
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiJlNTc3M2JlNDMzNGVlM2UzZWE0ZjgxMTdiYWJkYzRmMSIsIm5iZiI6MTcyNTkwOTc2MC41OTIzNzQsInN1YiI6IjY2ZGY0OTJjYmUyMWY5MmNkYTllMDE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GNaZ7hdiLbaBBVkUQA-EMkfBR99B4KgButNe_pVOWUk';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`; 

    return (
        <div>
            <h1>Películas del genero elegido</h1>
            <MoviesGrid url={url} />
        </div>
    );
};

export default FilterGenre;