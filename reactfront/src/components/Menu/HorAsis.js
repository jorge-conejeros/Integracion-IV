import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const HorAsis = () => {
    return (
      <div className='accordion'>
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
          </Accordion.Body>
          </Accordion.Item>
          <br></br>
          </Accordion>
      </div>
    )
  }
  
  export default HorAsis