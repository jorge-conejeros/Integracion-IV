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
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import webpay from '../assets/images/webpay.png';
import profile from '../assets/images/profile.png';


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
  <table className='table_A'>
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
          <table className='table_B'>
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
        <br></br>
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
        <table className='table_B'>
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
        <table className='table_B'>
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
      <br></br>
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
        <h5>En esta sección podras consultar el estado de tu cuenta corriente.</h5>
        <div>
          Información del Estudiante
        </div>
        <br></br>
        <div>
        <table className='table_B'>
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
         Estado de Cuotas Cuenta Corriente
        </div>
        <br></br>
        <div>
         Todas las Cuotas
        </div>
        <br></br>
        <div>
        <h5>Seleccione Estado:</h5>   
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Eliga un estado
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">Todos</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Vigente</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Pagado</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>
      <h5>Seleccione Concepto:</h5>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de conceptos
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">MATRÍCULA</Dropdown.Item>
          <Dropdown.Item href="#/action-2">CUOTA CURRICULAR</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="light">Filtrar</Button>
      </div>
      <br></br>
      <div>
        <table className='table_B'>
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
        <div className='paginas_pag'>
          <Pagination>
            <Pagination.Prev/>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </Accordion.Body>
      </Accordion.Item>
      
      
      <Accordion.Item eventKey="1">
      <Accordion.Header>Pago con WebPay Plus</Accordion.Header>
        <Accordion.Body>
        <div>
          Información del Estudiante
        </div>
        <br></br>     
        <div>
        <table className='table_B'>
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
          <Button variant="light" href='https://pagosweb.uct.cl/estudiantes' target='blank'>Ir al nuevo portal de pagos</Button>
        </div>
        <div>
          <img src={webpay} className="img_web"></img>
        </div>
      </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
      <Accordion.Header>Beneficios Estudiantiles</Accordion.Header>
        <Accordion.Body>
        <h5>Seleccione una Carrera:</h5>      
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
        <h6>En esta sección podras consultar el estado de tus cuotas (PAGADA, VIGENTE) de tu crédito complementario.</h6>
        <br></br>
        <div>
          Información del Estudiante
        </div>
        <br></br>
        <div>
        <table className='table_B'>
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
        <div>Cuotas Crédito Complementario</div>
        <br></br>
        <h5>Seleccione un Año:</h5>      
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Listado de Años
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="4">
      <Accordion.Header>Emisión de Documentos</Accordion.Header>
        <Accordion.Body>
        <div>
          Información del Estudiante
        </div>
        <br></br>
        <div>
        <table className='table_B'>
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
        <br></br>
        <h5>Seleccione una Carrera:</h5>      
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">Carrera 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Accordion.Body>
      </Accordion.Item>
      <br></br>
    </Accordion>           
  </div>}

  {
//HORAS ASISTENTE SOCIAL//
myDiv === "Horas Asistente Social" && 
  <div>
  <h6>En esta sección podrás realizar una reserva de hora con un/a asistente social donde se realizan las clases de tu carrera. Debes considerar que una reserva debe hacerse con 24 horas de antelación (de Lunes a Viernes) y sólo se podrá realizar una reserva cada 15 días a través de este medio. La atención será a través de videollamada, ya que se encuentran suspendidas las atenciones presenciales de forma indefinida</h6>
  <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Reserva de Hora
      </Accordion.Header>
        <Accordion.Body>
        <div>
          Información del Estudiante
        </div>
        <div>
        <table className='table_B'>
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
        <h5>Seleccione una Carrera:</h5>   
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h5>Datos de Reserva</h5>
      <div>
        <table className='calendario'>
          <thead>
            <tr>
              <td>dia?</td>
              <td></td>
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
        
      </Accordion.Body>
      </Accordion.Item>
      <br></br>
      </Accordion>
  </div>}

  {
//Documentos//
myDiv === "Documentos" && 
  <div className='accordion'>
  <p class="azul">Estimados/as estudiantes,<br></br>La Vicerrectoría Académica
  a través de la Dirección de Admisión y Registros Académicos en conjunto con
  la Dirección de Informática, tiene el agrado de comunicarles que contamos
  con un nuevo servicio de Firma Electrónica Avanzada, el cual permitirá brindarles
  una mejor atención y disminuir los tiempos</p><br></br>
  <p class="rojo">*Para imprimir los documentos se recomienda abrir con Adobe Acrobat Reader.<br></br>
  *Debe habilitar la opción de ventanas emergentes de su navegador.</p>
  <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Certificados
      </Accordion.Header>
        <Accordion.Body>
        <h5>Seleccione una Carrera:</h5>   
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Lista de carreras...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">carrera 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>
      <div id='general'>
      <p class='font-style'>Certificado Estudiante Regular</p>
      <Button variant="warning" size="mm">
         Descargar
        </Button>
      </div>
      <div id='general'>
      <p class='font-style'>Certificado Académico</p>
      <Button href = '#' target="_blank" variant="warning" size="mm">
         Descargar
        </Button>
      </div>
      <div id='general'>
      <p class='font-style'>Certificado Conducta</p>
      <Button href = '#' target="_blank" variant="warning" size="mm">
         Descargar
        </Button>
      </div>
      <div id='general'>
      <p class='font-style'>Certificado Permanencia</p>
      <Button href = '#' target="_blank" variant="warning" size="mm">
         Descargar
        </Button>
      </div>
      <div id='general'>
      <p class='font-style'>Convenio de prestación de Servicios</p>
      <Button href = '#' target="_blank" variant="warning" size="mm">
         Descargar
        </Button>
      </div>
      <div id='general'>
      <p class='font-style'>Formulario de Apelación para Causal de Eliminación</p>
      <p class='except'>El formulacio debe ser completado y entregado de manera física en su carrera.</p>
      <Button href = 'https://estudiantes.uct.cl/certificados_firmas_digitales/documentos/formulario_apelacion.pdf' target="_blank" variant="warning" size="mm">
         Descargar
        </Button>
      </div>
      </Accordion.Body>
      </Accordion.Item>
      <br></br>
      </Accordion>
  </div>}

  {
//Obs. Ficha Académica//
myDiv === "Obs. Ficha Académica" && 
  <div className='accordion'>
  <h6>En esta sección encontrarás el formulario para solicitar una modificación a tu historial académico, a través de ella puedes solicitar modificación de notas, incorporar notas y/o eliminar notas.
      <br></br>
      Además podrás consultar el estado de tu solicitud.</h6>
  <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Resultados Obs. Ficha Académica</Accordion.Header>
        <Accordion.Body>
        <h6>Seleccione una carrera para consultar el estado de su observación a la ficha académica acumulada.</h6>
        <br></br>
        <h5>Seleccione una Carrera:</h5>   
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
      <br></br>
      </Accordion>
  </div>}

  {
//INFORMACIÓN PERSONAL//
myDiv === "Información Personal" && 
  <div>
  <div>
  <img src={profile} alt='Foto de Perfil' className='img_info'></img>
  </div>
  <br></br>
  <div className='tabla_info'>
  <table>
    <tbody>
      <tr> 
        <td><strong>Rut:</strong></td>
        <td>dato</td>
      </tr>
      <tr>
        <td><strong>Apellido Paterno:</strong></td>
        <td>apellido 1</td>
      </tr>
      <tr>
        <td><strong>Apellido Materno:</strong></td>
        <td>apellido 2</td>
      </tr>
      <tr>
        <td><strong>Nombres:</strong></td>
        <td>nombre 1 nombre 2</td>
      </tr>
      <tr>
        <td><strong>Fecha de Nac.:</strong></td>
        <td>dd-mm-yy</td>
      </tr>
      <tr>
        <td><strong>Sexo:</strong></td>
        <td>m f</td>
      </tr>
      <tr>
        <td><strong>E-Mail UCTemuco:</strong></td>
        <td>dato2000@alu.ucl.cl</td>
      </tr>
    </tbody>
    </table>
    </div>
    <br></br>
    <br></br>
  </div>}
  {
//SOLICITUDES ESTUDIANTES//
myDiv === "Solicitudes Estudiantes" && 
  <div id='normal-div'>
    <p>En esta sección encontrarás el formulario mediante el cual puedes
      hacer una solicitud de Reincorporación, Suspensión o Renuncia. Además
      puedes consultar el estado en que se encuentra tu solicitud.</p><br></br>
  <div id="danger-div">
    <h5 class='danger-tittle'>Proceso de suspensión<br></br>
    Beneficios de arancel MINEDUC 2022</h5><br></br>
    <p class='danger-body'>Estimados Estudiantes:<br></br>
    Junto con saludar, informamos que desde el 02 de Agosto hasta el 29 de Semptiembre
    se encuetra habilitado el proceso de suspensión de Beneficios Estudiantiles MINEDUC.<br></br>
    Si realizaste suspensión o renuncia académica y cuentras con gratuidad, Beca de arancel o 
    Fondo Solidario de Crédito Universitario (FSCU) debes de ingresar al siguiente link,
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSeocRZrad0ibOsL9qbkOQzJ2HT-j7luMSu9Sns-jEQbLW7pKA/closedform' target='_blank'> Formulario </a>
    y completar el formulario online para solicitar la suspensión de tu beneficio, al que
    podrás ingresar solo a través de tu correo electrónico institucional.<br></br>
    Descarga <a href='https://estudiantes.uct.cl/documentos/INSTRUCTIVO_SUSPENSJON_BENEFICIOS_ESTUDIANTES.pdf' target='_blank'>AQUÍ </a>
    el instructivo del proceso de suspensión de Beneficios Estudiantiles.<br></br>
    <b>Respecto a la carga de documentos en formato PDF, debes considerar lo siguiente:</b><br></br>
    1. Formulario suspensiones: Solo lo debes cargar en caso de contar con Beca de Arancel. Se exime
    de esta obligación a los estudiantes que tengan Gratuidad.<br></br>
    2. Documentos de respaldo para acreditar motivo de suspensión: Solo lo debes cargar en caso de
    contar con Gratuidad o Becas de Arancel, toda vez que las suspensiones totales desde el año
    de asignación del beneficio a la fecha (incluyendo solicitud actual) sean superiores a 02 semestres
    académicos. Se exime de esta obligación a los estudiantes que tengan FSCU.<br></br>
    <b>*EL PROCESOS DE SUSPENSIÓN ES DE EXCLUSIVA RESPONSABILIDAD DEL ESTUDIANTE*</b></p>
  </div>
  <br></br>
  <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Ingresar Solicitud
      </Accordion.Header>
        <Accordion.Body>
      <table className='table_B'>
          <thead>
            <tr>
              <td>Rut</td>
              <td>Nombre</td>
              <td>Celular</td>
              <td>E-Mail</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato1</td>
              <td>Dato2</td>
              <td>Dato3</td>
              <td>Dato4</td>
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
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="1">
      <Accordion.Header>Resultado de Solicitud</Accordion.Header>
        <Accordion.Body>
        <div>
          Información del Estudiante
        </div>
        <table className='table_B'>
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
      <br></br>
      </Accordion>
  </div>}


</p>
</div>
        </>
      );
}

export default Menu;