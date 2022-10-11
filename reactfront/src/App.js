import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//  importar componenetes 
import Home from './pages/Home';
import Session from './pages/Session'
import NavBar from './components/Navbar';
import Login from './components/login'
import Contenido from './components/Contenido';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/login' element= { <Session /> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
