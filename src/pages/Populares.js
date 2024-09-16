import React from 'react';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';

const Popular = () => {
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiJlNTc3M2JlNDMzNGVlM2UzZWE0ZjgxMTdiYWJkYzRmMSIsIm5iZiI6MTcyNTkwOTc2MC41OTIzNzQsInN1YiI6IjY2ZGY0OTJjYmUyMWY5MmNkYTllMDE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GNaZ7hdiLbaBBVkUQA-EMkfBR99B4KgButNe_pVOWUk';
    const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    return (
        <div>
            <h1>Películas Populares</h1>
            <MoviesGrid url={urlPopular} />
        </div>
    );
};

export default Popular; 