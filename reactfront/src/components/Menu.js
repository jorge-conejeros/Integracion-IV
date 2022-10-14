import React from 'react'
import '../Styles/Menu.css'
import Nav from 'react-bootstrap/Nav';

function Menu() {
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
        </Nav>
      );
}

export default Menu;