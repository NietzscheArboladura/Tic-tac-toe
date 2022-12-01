import React from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToe";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home">TIC-TAC-TOE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App">
        <TicTacToe />
      </div>
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: "80%" }}
        >
          <CDBBox display="flex" alignItems="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                src="https://media.tenor.com/OiEJht3qg-EAAAAi/takodachi-ina.gif"
                width="30px"
              />
              <span className="ml-4 h5 mb-0 font-weight-bold">Team Rojo</span>
            </a>
          </CDBBox>
          <CDBBox>
            <small className="ml-2">
              &copy; CIT-U 2022. All rights reserved.
            </small>
          </CDBBox>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
              <a href="https://www.facebook.com/m.meSinitchi/">
                {" "}
                <i class="fa fa-dribbble fa-4x"></i>
              </a>
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
              <a href="https://twitter.com/sinitch27">
                {" "}
                <i class="fa fa-dribbble fa-4x"></i>
              </a>
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
              <a href="https://www.instagram.com/snitch_27/">
                {" "}
                <i class="fa fa-dribbble fa-4x"></i>
              </a>
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </>
  );
}

export default App;
