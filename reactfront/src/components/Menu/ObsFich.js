import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const ObsFich = () => {
    return (
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
      </div>
    )
  }
  
  export default ObsFich