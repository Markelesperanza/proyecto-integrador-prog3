import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './pages/Detalle';
import Favoritos from './pages/Favoritos';
import VerTodas from './pages/VerTodas';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={() => <h1>Bienvenido a My Movie App</h1>} />
            <Route path="/favoritos" component={Favoritos} />
            <Route path="/all-movies" component={VerTodas} />
            <Route path="/detalle/:id" component={Detalle} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

