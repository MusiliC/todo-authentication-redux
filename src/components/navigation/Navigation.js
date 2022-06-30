import React from "react";
import {  Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { signOut } from "../../redux/actions/authActions";

export default function Navigation() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log(state);

  const handleSignOut = () => {
    dispatch(signOut())
    navigate("/signin")
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="mx-5">
            <h4>Todo List App</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Text className="mx-5 d-flex ">
                Logged in as: <p className="ms-2"> Brian Musili</p>
              </Navbar.Text>
              <div className="d-flex ms-5 justify-content-between">
                <Nav.Link >
                  <Button
                    variant="outline-success"
                    className="btn-sm"
                    onClick={() => handleSignOut()}
                  >
                    Sign Out
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/signin">
                  <Button variant="outline-success" className="btn-sm">
                    Sign in
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  <Button variant="outline-success" className="btn-sm">
                    Sign up
                  </Button>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
