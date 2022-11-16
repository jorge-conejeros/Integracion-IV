import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Docum = () => {
    return (
      <div className='accordion'>
      <p className="azul">Estimados/as estudiantes,<br></br>La Vicerrectoría Académica
      a través de la Dirección de Admisión y Registros Académicos en conjunto con
      la Dirección de Informática, tiene el agrado de comunicarles que contamos
      con un nuevo servicio de Firma Electrónica Avanzada, el cual permitirá brindarles
      una mejor atención y disminuir los tiempos</p><br></br>
      <p className="rojo">*Para imprimir los documentos se recomienda abrir con Adobe Acrobat Reader.<br></br>
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
          <p className='font-style'>Certificado Estudiante Regular</p>
          <Button variant="warning" size="mm">
             Descargar
            </Button>
          </div>
          <div id='general'>
          <p className='font-style'>Certificado Académico</p>
          <Button href = '#' target="_blank" variant="warning" size="mm">
             Descargar
            </Button>
          </div>
          <div id='general'>
          <p className='font-style'>Certificado Conducta</p>
          <Button href = '#' target="_blank" variant="warning" size="mm">
             Descargar
            </Button>
          </div>
          <div id='general'>
          <p className='font-style'>Certificado Permanencia</p>
          <Button href = '#' target="_blank" variant="warning" size="mm">
             Descargar
            </Button>
          </div>
          <div id='general'>
          <p className='font-style'>Convenio de prestación de Servicios</p>
          <Button href = '#' target="_blank" variant="warning" size="mm">
             Descargar
            </Button>
          </div>
          <div id='general'>
          <p className='font-style'>Formulario de Apelación para Causal de Eliminación</p>
          <p className='except'>*El formulario debe ser completado y entregado de manera física en su carrera.</p>
          <Button href = 'https://estudiantes.uct.cl/certificados_firmas_digitales/documentos/formulario_apelacion.pdf' target="_blank" variant="warning" size="mm">
             Descargar
            </Button>
          </div>
          </Accordion.Body>
          </Accordion.Item>
          <br></br>
          </Accordion>
      </div>
    )
  }
  
  export default Docum