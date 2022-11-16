import React, { useState } from 'react'
import '../Styles/Menu.css'
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CueCor from './CueCor';
import DatBiblio from './Menu/DatBiblio';
import Docum from './Menu/Docum';
import HorAsis from './Menu/HorAsis';
import InfAca from './Menu/InfAca';
import InfPer from './InfPer';
import NotPar from './Menu/NotPar';
import ObsFich from './Menu/ObsFich';
import SoliciEstu from './Menu/SoliciEstu';
const endpoint ='http://127.0.0.1:8000/api';

var flag = 0;

function cambia(){
  // A "Oscuro"
  if(flag == 0){
    document.getElementById('divshare').style.background="#004C80";
    document.getElementById('divshare').style.color="white";
    document.getElementById('btn-themeM').style.background="white";
    document.getElementById('btn-themeM').style.color="#021B79";
    document.getElementById('barrita').style.background="black";
    flag =1 ;
  }else{
    // A "Claro"
    document.getElementById('divshare').style.background="wheat";
    document.getElementById('divshare').style.color="black";
    document.getElementById('btn-themeM').style.background="#021B79";
    document.getElementById('btn-themeM').style.color="white";
    document.getElementById('barrita').style.background="white";
    flag = 0 ;
  }
}


function Menu() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  function prestamo(e) {
    e.preventDefault();
    console.log("divcompartido");
  }

  const [myDiv, setMyDiv] = useState("");

  const [selected, setSelected] = useState(1)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }


  const logoutSubmit = (e) => {
      e.preventDefault();
      axios.post(`${endpoint}/logout`).then(res => {
          if(res.data.status === 200)
          {
              localStorage.removeItem('auth_token');
              localStorage.removeItem('auth_name');
              MySwal.fire({
                title: 'Success',
                text: res.data.message,
                icon: 'success',
                confirmButtonText: 'Cool'
              });
              navigate('/');
          }
      });}

    return (
        <>
        <div className='banner-container' id='barrita'>
        <button id='btn-themeM' className='botoncitoMenu' type="submit" onClick={() => cambia()}>Cambiar color</button>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>Inscribir Cursos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>Nota P</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" onClick={() => setMyDiv("Préstamos Biblioteca")}>Préstamos Biblioteca</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" onClick={() => setMyDiv("Información Académica")}>Información Académica</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-5" onClick={() => setMyDiv("Notas Parciales")}>Notas Parciales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-6" onClick={() => setMyDiv("Cuenta Corriente")}>Cuenta Corriente</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-7" onClick={() => setMyDiv("Horas Asistente Social")}>Horas Asistente Social</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-8" onClick={() => setMyDiv("Documentos")}>Documentos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="l9" onClick={() => setMyDiv("Solicitudes Estudiantes")}>Solicitudes Estudiantes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="10" onClick={() => setMyDiv("Obs. Ficha Académica")}>Obs. Ficha Académica</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="11" onClick={() => setMyDiv("Información Personal")}>Información Personal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <button type='button' onClick={logoutSubmit} className='nav-link btn btn-danger btn-sm'>Cerrar Sesión</button>
            </Nav.Item>
          </Nav>
        </div>
        <div className='Info-container' id='divshare'>
        {myDiv}
        {myDiv === "Préstamos Biblioteca" && <div className='Footer-container'><DatBiblio /></div>}
        {myDiv === "Información Académica" && <div className='Footer-container'><InfAca /></div>}
        {myDiv === "Notas Parciales" && <div className='Footer-container'><NotPar /></div>}
        {myDiv === "Cuenta Corriente" && <div className='Footer-container'><CueCor /></div>}
        {myDiv === "Horas Asistente Social" && <div className='Footer-container'><HorAsis /></div>}
        {myDiv === "Documentos" && <div className='Footer-container'><Docum /></div>}
        {myDiv === "Solicitudes Estudiantes" && <div className='Footer-container'><SoliciEstu /></div>}
        {myDiv === "Obs. Ficha Académica" && <div className='Footer-container'><ObsFich /></div>}
        {myDiv === "Información Personal" && <div className='Footer-container'><InfPer /></div>}
        </div>
        </>
      );
}

export default Menu;