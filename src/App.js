import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetalleMovie from './components/DetalleMovie/DetalleMovie'
import Populares from './pages/Populares'
import Cartelera from './pages/Cartelera'
//import Favoritos from './pages/Favoritos'; 
import Home from './pages/Home';
import FilterGenre from './pages/FilterGenre';
import SearchResults from './pages/SearchResults';
import NotFound from './components/NotFound/NotFound';
import FavoriteMovies from './pages/FavoriteMovies';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/detalle/:id" component={ DetalleMovie } />
            <Route path="/all-popular-movies" component={ Populares } />
            <Route path="/all-cartelera-movies" component={ Cartelera } />
            <Route path="/filter/:genreId" component={ FilterGenre } />
            <Route path="/search" component={SearchResults} /> 
            <Route path="/favorite-movies" component={FavoriteMovies} />
            <Route component={ NotFound } />


          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
