import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//  importar componenetes 
import Home from './pages/Home';
import Session from './pages/Session'
import axios from 'axios';


axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}`: ``;
  return config;

});

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
