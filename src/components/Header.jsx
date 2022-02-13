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
              <Link to="/articlefilter/im-news" className="nav-link"> IM NEWS</Link>
              <NavDropdown title="SEGMENTS" id="collasible-nav-dropdown">
                
                 <Link to="/articlefilter/interviews" className="nav-link dropdown-item text-dark py-1 px-2"> Intereviews</Link>
               
                <Link to="/articlefilter/student's-corner" className="nav-link dropdown-item text-dark py-1 px-2"> Student's Corner</Link>
                
                  
                  <Link to="/articlefilter/expert's-insights" className="nav-link dropdown-item text-dark py-1 px-2"> Expert's Insights</Link>
                
                  <Link to="/articlefilter/IMSSA-events" className="nav-link text-dark dropdown-item py-1 px-2">IMSSA Events</Link>
                
                  <Link to="/articlefilter/reaserch-and-development" className="nav-link dropdown-item text-dark py-1 px-2">Reaserch and Development</Link>
                
                  <Link to="/articlefilter/miscellaneous" className="nav-link text-dark dropdown-item py-1 px-2">Miscellaneous</Link>
                
              </NavDropdown>
              <Link className="nav-link" to='/about-us'>ABOUT-US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
