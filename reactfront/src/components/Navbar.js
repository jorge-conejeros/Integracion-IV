import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/images/Logo_UCT.png';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import navIcon4 from '../assets/images/nav-icon4.svg';

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container  >
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <h5 id='nav-titulo'>PORTAL ESTUDIANTIL UCT</h5>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://www.uct.cl/calendario-academico/" className={activeLink === 'calendario' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('calendario')}>CALENDARIO</Nav.Link>
              <Nav.Link href="https://educa.uct.cl/" className={activeLink === 'educa' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('educa')}>EDUCA</Nav.Link>
              <Nav.Link href="https://dge.uct.cl/" className={activeLink === 'dge' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('dge')}>DGE</Nav.Link>
              <Nav.Link href="https://dara.uct.cl/" className={activeLink === 'dara' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('dara')}>DARA</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.youtube.com/user/canaluctemuco"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/canaluctemuco"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://www.instagram.com/uctemuco/"><img src={navIcon3} alt="Instagram" /></a>
                <a href="https://twitter.com/UC_Temuco"><img src={navIcon4} alt="Twitter" /></a>
              </div>
              {/* <Button className="vvd" onClick={handleShow}><span>Inicio Sesion</span></Button> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;