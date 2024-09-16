import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Layout/Header';  
import Footer from './components/Layout/Footer'; 
import Detalle from './pages/Detalle';
import Populares from './pages/Populares'  
//import Favoritos from './pages/Favoritos'; 
// import VerTodas from 'pages/VerTodas';  
import Home from './pages/Home';  

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>  
              <Route exact path="/" element={<Home />} />  
              <Route path="/detalle/:id" element={<Detalle />} />
              <Route path="/all-popular-movies" element={<Populares/>}/> 
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
