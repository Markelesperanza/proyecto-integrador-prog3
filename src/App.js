import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import DetalleMovie from './components/DetalleMovie/DetalleMovie'
import Populares from './pages/Populares'
import Cartelera from './pages/Cartelera'
//import Favoritos from './pages/Favoritos'; 
import Home from './pages/Home';
import FilterGenre from './pages/FilterGenre';
import SearchResults from './pages/SearchResults';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <Router>
      <Navbar />

      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/detalle/:id" component={ DetalleMovie } />
            <Route path="/all-popular-movies" component={ Populares } />
            <Route path="/all-cartelera-movies" component={ Cartelera } />
            <Route path="/filter/:genreId" component={ FilterGenre } />
            <Route path="/search" component={SearchResults} /> 
            <Route component={ NotFound } />


          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
