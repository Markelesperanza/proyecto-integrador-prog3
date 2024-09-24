import Navbar from './components/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Populares from './pages/Populares';
import Cartelera from './pages/Cartelera';
import FilterGenre from './pages/FilterGenre';
import SearchResults from './pages/SearchResults';
import Favorite from './pages/Favorite';

import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <Router>
        <Navbar />

        <main>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/detalle/:id" component={Detalle} />
            <Route path="/all-popular-movies" component={ Populares } />
            <Route path="/all-cartelera-movies" component={ Cartelera } />
            <Route path="/filter/:genreId" component={ FilterGenre } />
            <Route path="/search" component={SearchResults} /> 
            <Route path="/favorite-movies" component={Favorite} />
            <Route component={ NotFound } />
          </Switch>
        </main>

        <Footer />
    </Router>
    
  );
}

export default App;
