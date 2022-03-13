import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container , Nav , NavItem , NavLink} from 'react-bootstrap';

const NavBar = () =>{
return (
<Navbar bg="dark" variant="dark" light expand="md">
    <Container>
      <Navbar.Brand href="#home">
      Motor Shop
      </Navbar.Brand>
      <Nav className="ml-auto">

      <NavItem>
      <NavLink variant="light" href="#vehiculos">Vehiculos</NavLink>
      </NavItem>

      <NavItem>
      <NavLink variant="light" href="#repuestos">Repuestos</NavLink>
      </NavItem>

      <NavItem>
      <NavLink variant="light" href="#contacto">Contacto</NavLink>
      </NavItem>

      </Nav>
    </Container>
  </Navbar>
)
  
};

export default NavBar;