import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const SoliciEstu = () => {
    return (
      <div className='normal-div'>
      <div className='accordion'>
      <h6>En esta sección encontrarás el formulario mediante el cual puedes
        hacer una solicitud de Reincorporación, Suspensión o Renuncia. Además
        puedes consultar el estado en que se encuentra tu solicitud.</h6><br></br>
        </div>
    <div id="danger-div">
      <h5 className='danger-tittle'>Proceso de suspensión<br></br>
      Beneficios de arancel MINEDUC 2022</h5><br></br>
      <p className='danger-body'>Estimados Estudiantes:<br></br>
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
    </div>
    )
  }
  
  export default SoliciEstu