import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineEdit,
  AiOutlineBook,
} from "react-icons/ai";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavbarComp() {
  return (
    <Router>
      <Navbar id="navbar" expand="lg">
        <Container fluid className="col-md-10">
          <Navbar.Brand>
            <AiOutlineCalendar size={50} /> Agendamento Online
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/meusAgendamentos" id="navlink">
                <AiOutlineBook size={25} />
                Meus Agendamentos
              </Nav.Link>
              <Nav.Link as={Link} to="/agendar">
                <AiOutlineEdit size={25} /> Agendar
              </Nav.Link>
            </Nav>
            <Nav className="col-lg-2">
              <NavDropdown
                title="Nome do Usuário"
                id="navbarScrollingDropdown"
                className="col-1 pt-2"
              >
                <NavDropdown.Item as={Link} to="/meuPerfil">
                  Meu Perfil
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login">
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavbarComp;
