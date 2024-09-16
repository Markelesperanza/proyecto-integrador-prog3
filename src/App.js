import {Routes, Route} from 'react-router-dom'
import Detalle from './pages/Detalle';

function App() {

  return (
    <>
      <Routes>
        <Route path="/detalle/:id" element={<Detalle />}/>
      </Routes>
    </>
  );
}

export default App;
