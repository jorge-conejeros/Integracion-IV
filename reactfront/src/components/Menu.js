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
import Accordion from 'react-bootstrap/Accordion';


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

{
//PRÉSTAMOS BIBLIOTECA//
myDiv === "Préstamos Biblioteca" && 
  <table className='componente_A'>
    <thead>
      <tr>
        <td>Material</td>
        <td>Título</td>
        <td>Autor</td>
        <td>Fecha Préstamo</td>
        <td>Fecha Devolución</td>
        <td>Biblioteca</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="6">No tiene préstamos vigentes</td>
      </tr>
    </tbody>
    <br></br>
  </table>}
           
{
// INFORMACIÓN ACADÉMICA // 
myDiv === "Información Académica" && 
  <div className='accordion'>
    <h5>En esta sección encontrarás información académica: cursos inscritos, cursos aprobados, cursos reprobados, competencias genéricas y créditos de libre disposición.
</h5>
    <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Historia Académica</Accordion.Header>
        <Accordion.Body>
          <h6>Elige una carrera para consultar las notas de los cursos que has realizado en la Universidad Católica de Temuco.</h6>
        <div>
          Información del Estudiante
        </div>
        <div>
          <table className='componente_B'>
            <thead>
              <tr>
                <td>Rut</td>
                <td>Nombre</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dato1</td>
                <td>Dato2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h5>Seleccione su carrera:</h5>
          <DropdownButton
            as={ButtonGroup}           
            align={{lg: 'up' }}
            title="Lista de carreras..."
            id="dropdown-item-button"
          >
            <Dropdown.Item>
              Aquí van las carreras
            </Dropdown.Item>
          </DropdownButton>
        </div>
        </Accordion.Body>
      </Accordion.Item>
        <Accordion.Item eventKey="1">
        <Accordion.Header>Cursos Inscritos</Accordion.Header>
        <Accordion.Body>
          <h6>Al seleccionar una carrera se cargará el año y el semestre actual que estas cursando, sin embargo, puedes modificar el año y el semestre para consultar otras cargas académicas. Al hacer click en el boton 'Generar Certificado', se genererá un archivo con extension .PDF que posee toda la información de tus cursos inscritos.</h6>
          <br></br>
        <div>
          <h5>Seleccione su carrera:</h5>
          <DropdownButton
            as={ButtonGroup}           
            align={{lg: 'up' }}
            title="Lista de carreras..."
            id="dropdown-item-button"
          >
            <Dropdown.Item>
              Aquí van las carreras
            </Dropdown.Item>
          </DropdownButton>
        </div>
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>   
  </div>}
          
               
{
//NOTAS PARCIALES------------------------------------------------

myDiv === "Notas Parciales" && 
  <div className='accordion'>
    <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Notas Parciales</Accordion.Header>
        <Accordion.Body>
          <h6>En esta sección encotrarás las notas parciales y los procentajes de asistencia de las carreras.</h6>
        <div>
          Información del Estudiante
        </div>
        <table className='componente_C'>
          <thead>
            <tr>
              <td>Rut</td>
              <td>Nombre</td>
            </tr>
          </thead>
          <tbody id='datos'>
            <tr>
              <td>Dato1</td>
              <td>Dato2</td>
            </tr>
          </tbody>
        </table>
        <h5>Seleccione una Carrera:</h5>
            
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      <h5>Seleccione Semestre:</h5>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Seleccione Semestre
        </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2">Primer Semestre</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Segundo Semestre</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>Asistencia</Accordion.Header>
        <Accordion.Body>
        <div>
          Información del Estudiante
        </div>
        <table className='componente_C'>
          <thead>
            <tr>
              <td>Rut</td>
              <td>Nombre</td>
            </tr>
          </thead>
          <tbody id='datos'>
            <tr>
              <td>Dato1</td>
              <td>Dato2</td>
            </tr>
          </tbody>
        </table>
        <h5>Seleccione una Carrera:</h5>
            
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      <h5>Seleccione Semestre:</h5>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Seleccione Semestre
        </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2">Primer Semestre</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Segundo Semestre</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
  </div>}

{
//CUENTA CORRIENTE//
myDiv === "Cuenta Corriente" && 
  <div className='accordion'>
    <h6>En esta sección encontrarás información de tus cuentas (Deudas, Pagarés, cuotas, etc) y beneficios (Becas y/o Créditos) que posees en la Universidad Católica de Temuco.</h6>
      <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Cuenta Corriente</Accordion.Header>
        <Accordion.Body>
        <h4>Seleccione una Carrera:</h4>      
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
      <Accordion.Header>Pago con WebPay Plus</Accordion.Header>
        <Accordion.Body>
        <h4>Seleccione una Carrera:</h4>      
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
      <Accordion.Header>Beneficios Estudiantiles</Accordion.Header>
        <Accordion.Body>
        <h4>Seleccione una Carrera:</h4>      
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="3">
      <Accordion.Header>Crédito Complementario</Accordion.Header>
        <Accordion.Body>
        <h4>Seleccione una Carrera:</h4>      
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="4">
      <Accordion.Header>Emisión de Documentos</Accordion.Header>
        <Accordion.Body>
        <h4>Seleccione una Carrera:</h4>      
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
    </Accordion>           
  </div>}

  {
//HORAS ASISTENTE SOCIAL//
myDiv === "Horas Asistente Social" && 
  <div>
  <h6>En esta sección podrás realizar una reserva de hora con un/a asistente social donde se realizan las clases de tu carrera. Debes considerar que una reserva debe hacerse con 24 horas de antelación (de Lunes a Viernes) y sólo se podrá realizar una reserva cada 15 días a través de este medio. La atención será a través de videollamada, ya que se encuentran suspendidas las atenciones presenciales de forma indefinida</h6>
  <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
  </div>}

</p>
</div>
        </>
      );
}

export default Menu;