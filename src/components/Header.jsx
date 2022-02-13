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
                <NavDropdown.Item>
                 <Link to="/articlefilter/interviews" className="nav-link text-dark p-0"> Intereviews</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to="/articlefilter/student's-corner" className="nav-link text-dark p-0"> Student's Corner</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  
                  <Link to="/articlefilter/expert's-insights" className="nav-link text-dark p-0"> Expert's Insights</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/articlefilter/IMSSA-events" className="nav-link text-dark p-0">IMSSA Events</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/articlefilter/reaserch-and-development" className="nav-link text-dark p-0">Reaserch and Development</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  <Link to="/articlefilter/miscellaneous" className="nav-link text-dark p-0">Miscellaneous</Link>
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
