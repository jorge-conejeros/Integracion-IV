import React from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner'
import Login from '../components/login';
import AccesosDirect from '../components/AccesosDirect';
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import Contenido from '../components/Contenido'
import '../Styles/Home.css'

var flag = 0;

function cambia(){
  if(flag == 0){
    document.getElementById('prueba').style.background="linear-gradient(to right, #021B79, #0575E6)";
    document.getElementById('btn-theme').style.background="#021B79";
    document.getElementById('prueba').style.color="white";
    document.getElementById('btn-theme').style.color="white";
    flag =1 ;
  }else{
    document.getElementById('prueba').style.background="white";
    document.getElementById('btn-theme').style.background="white";
    document.getElementById('prueba').style.color="black";
    document.getElementById('btn-theme').style.color="#021B79";
    flag = 0 ;
  }
}

const Home = () => {
  return(
    <>
    <div className='nav-container'>
      <NavBar/>
    </div>
    <div className='login-container' id='prueba'>
      <button id='btn-theme' className='botoncito' type="submit" onClick={() => cambia()}>Cambiar color</button>
      <Login />
    </div>
    <div className='big-container'>
    <div className='banner-container'>
      <Banner/>
    </div>
    <div className='Accesos-container'>
      <AccesosDirect />
    </div>
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