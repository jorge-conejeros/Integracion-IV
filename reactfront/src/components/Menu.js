import React from 'react'
import '../Styles/Menu.css'
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const endpoint ='http://127.0.0.1:8000/api';


function Menu() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
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
      });

  }

    return (
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Inscribir Cursos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Nota P</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Préstamos Biblioteca</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Información Académica</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">Notas Parciales</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6">Cuenta Corriente</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-7">Horas Asistente Social</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-8">Documentos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="l9">Solicitudes Estudiantes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="10">Obs. Ficha Académica</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="11">Información Personal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <button type='button' onClick={logoutSubmit} className='nav-link btn btn-danger btn-sm'>Logout</button>
          </Nav.Item>
        </Nav>
      );
}

export default Menu;