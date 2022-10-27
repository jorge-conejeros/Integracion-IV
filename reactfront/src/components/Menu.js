import React, { useState } from 'react'
import '../Styles/Menu.css'
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Session from '../pages/Session';
import '../Styles/Menu.css'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const endpoint ='http://127.0.0.1:8000/api';

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
        <div className='banner-container'>
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
        <div className='espacio'></div>
        <div className='Info-container' id='divshare'>
          <p>{myDiv}</p>
          <p>
            {myDiv === "Préstamos Biblioteca" && 
            <table className='componente_A'>
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Fecha Préstamo</th>
                  <th>Fecha Devolución</th>
                  <th>Biblioteca</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primer dato</td>
                  <td>Segundo dato</td>
                  <td>Tercer dato</td>
                  <td>Cuarto dato</td>
                  <td>Quinto dato</td>
                  <td>Sexto dato</td>
                </tr>
              </tbody>
            </table>}
           
            {myDiv === "Información Académica" && 
            <div className='componente_B'>
              <div className='acordeon'>
                {data.map((item, i) => (
                  <div className='item'>
                    <p>En esta sección encontrarás información académica: cursos inscritos, cursos aprobados, cursos reprobados, competencias genéricas y créditos de libre disposición.</p>
                    <div className='title' onClick={() =>  toggle(i)}>       
                      <h4>{item.Historial}</h4>
                      <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? 'contenido show' : 'contenido'}>{item.Info}
                    <div>  
                    </div>
                    </div>  
                  </div>
                ))}
              </div>
            </div>}
          
          
          
            {myDiv === "Notas Parciales" && 
            <div className='componente_C'>
            <DropdownButton
              as={ButtonGroup}           
              align={{lg: 'end' }}
              title="Notas Parciales"
              id="dropdow-menu-align-responsive"
              >
            <div>
              <h1>Información del Estudiante</h1>
            <tr>
              <th>Rut: $rut</th>
              <th>Nombre: $nombre</th>
            </tr>
            </div>
            </DropdownButton> 
              
            
            </div>} 
          </p>
        </div>
        </>
      );
}

const data = [
  {
    Historial: 'Historia Académica',
    Info: 'Información del Estudiante'
  }
]

export default Menu;