import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3">
        <Container>
            <Link to={'/'}> <img src={logo} alt="" style={{height:'3.3rem'}}/></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="/">HOME</Nav.Link> */}
              <Link className="nav-link" to='/'>HOME</Link>
              <Nav.Link href="#memory-lane">MEMORY LANE</Nav.Link>
              <Nav.Link href="#im-news">IM NEWS</Nav.Link>
              <NavDropdown title="SEGMENTS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Intereviews
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Student's Corner
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Expert's Insights
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  IMSSA Events
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Reaserch and Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Miscellaneous
                </NavDropdown.Item>
              </NavDropdown>
              <Link className="nav-link" to='/about-us'>ABOUT-US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
