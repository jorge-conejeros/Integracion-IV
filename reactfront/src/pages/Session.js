import React, { useEffect, useState } from 'react';
import Contacto from '../components/Contacto'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../Styles/Session.css'
import axios from 'axios';


const endpoint = 'http://127.0.0.1:8000/api';

const Session = () => {

  return (
    <>
      <div className='nav-container'>
        <NavBar />
      </div>
      <div className='welcome-container'>
        <h2>BIENVENIDO $Nombre</h2>
      </div>
      <div className='banner-container'>
        <Menu />
      </div>
      <div className='Info-container'>
        QUE BUSCAS?
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

export default Session;