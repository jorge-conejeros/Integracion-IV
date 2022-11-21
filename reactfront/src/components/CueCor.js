import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

import webpay from '../assets/images/webpay.png';

const CueCor = () => {
    return (
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
    </div>
    )
  }
  
  export default CueCor