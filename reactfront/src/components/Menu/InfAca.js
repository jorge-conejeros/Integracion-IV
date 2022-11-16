import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Accordion from 'react-bootstrap/Accordion';

const InfAca = () => {
    return (
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
    </div>
    )
  }
  
  export default InfAca