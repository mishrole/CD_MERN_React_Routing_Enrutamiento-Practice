import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        Routing (Practice)
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/hello">Hello</Link>
          <Link className="nav-link" to="/hello/blue/red">Hello Blue Red</Link>
          <Link className="nav-link" to="/4">4</Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header