import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const NotPar = () => {
    return (
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
        
    </div>
    )
  }
  
  export default NotPar