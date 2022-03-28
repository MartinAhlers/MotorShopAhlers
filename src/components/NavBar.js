import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container , Nav , NavItem , NavLink} from 'react-bootstrap';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
const NavBar = () =>{
return (
<Navbar bg="dark" variant="dark" light expand="md">
    <Container>
    <Link to="/"><Navbar.Brand href="#home">
      Motor Shop
      </Navbar.Brand></Link>
      <Nav className="ml-auto">

      <NavItem>
      <Link to="/productos/vehiculos"><NavLink variant="light" href="#vehiculos">Vehiculos</NavLink></Link>
      </NavItem>

      <NavItem>
      <Link to="/productos/repuestos"><NavLink variant="light" href="#repuestos">Repuestos</NavLink></Link>
      </NavItem>

      <NavItem>
      <Link to="/nosotros"><NavLink variant="light" href="#nosotros">Nosotros</NavLink></Link>
      </NavItem>


      <NavItem>
      <Link to="/contacto"><NavLink variant="light" href="#contacto">Contacto</NavLink></Link>
      </NavItem>
      <NavItem>
      <NavLink><CartWidget /></NavLink>
       </NavItem>
      </Nav>
    </Container>
  </Navbar>
)
  
};

export default NavBar;