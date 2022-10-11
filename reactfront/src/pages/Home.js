import React from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner'
import Login from '../components/login';
import AccesosDirect from '../components/AccesosDirect';
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import Contenido from '../components/Contenido'
import '../Styles/Home.css'

const Home = () => {
  return(
    <>
    <div className='nav-container'>
      <NavBar/>
    </div>
    <div className='login-container'>
      <Login />
    </div>
    <div className='banner-container'>
      <Banner/>
    </div>
    <div className='Accesos-container'>
      <AccesosDirect />
    </div>
    <div className='Contacto-container'>
      <Contacto />
    </div>
    <div className='Footer-container'>
      <Footer />
    </div>
    </>
  );
}

export default Home;