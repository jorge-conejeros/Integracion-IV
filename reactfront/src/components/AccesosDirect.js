import React from 'react'
import '../Styles/Accesos.css'
import Galeria from '../assets/images/galeria.jpg'
import Repositiorios from '../assets/images/repositorio.jpg'
import Credito from '../assets/images/credito.jpg'
import biblioteca from '../assets/images/bibliotecas.jpg'
import Trabaja from '../assets/images/trabaja.jpg'
import Pastoral from '../assets/images/pastoral.jpg'
import Voluntariado from '../assets/images/voluntariado.jpg'


const AccesosDirect = () => {
  return (
    <>
      <div className='saltito'>
        
      </div>
      <div className='title-direct'>
        <h3 id='one-title'>
          Enlaces de Interes
        </h3>
      </div>
      <div className='enlaces'>
        
        <a href='https://galeriaarte.uct.cl/'>
          <img src={Galeria} id='galeria' />
        </a>
        <a href='https://repositoriodigital.uct.cl/'>
          <img src={Repositiorios} id='galeria' />
        </a>
        <a href='https://dcr.uct.cl/'>
          <img src={Credito} id='galeria' />
        </a>
        <a href='https://biblioteca.uct.cl/'>
          <img src={biblioteca} id='galeria' />
        </a>
        <a href='https://uct.cl/destacados/'>
          <img src={Trabaja} id='galeria' />
        </a>
        <a href='https://vicegrancancilleria.uct.cl/pastoral/'>
          <img src={Pastoral} id='galeria' />
        </a>
        <a href='https://vicegrancancilleria.uct.cl/voluntariado/'>
          <img src={Voluntariado} id='galeria' />
        </a>
      </div>
    </>
  )
}

export default AccesosDirect