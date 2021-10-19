import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import SignUpModel from "../Signup/signup";
import SignInModel from "../Signin/signin"
import "./navbar.css"

const Nabbar = () => {
  const [show, setShow] = useState(false);
  const [shhow, setShhow] = useState(false);

  //Signup Model
  const handleSignupModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  //Signin Model
  const handleSigninModal = () => {
    setShhow(true);
  };
  const handleSigninCloseModal = () => {
    setShhow(false);
  };
  return (
    <>
    <header>
      <Navbar bg="light" variant="light" expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home" className="brand-name">Blogs</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link onClick={() => handleSignupModal()}>Signup</Nav.Link>
            <Nav.Link onClick={() => handleSigninModal()}>Signin</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>

      <SignUpModel show={show} handleCloseModal={handleCloseModal} />
      <SignInModel shhow={shhow} handleCloseSigninModal={handleSigninCloseModal} />
    </>
  );
};

export default Nabbar;
