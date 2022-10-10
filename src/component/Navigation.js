import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

import '../App.css';


const Navigation = () => {
    return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand">WEB QZY MCQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink  className= "{({isActive})=> isActive ? 'active' : undefined} nav-link px-4" to='/home'>Home</NavLink>
            <NavLink className ="nav-link px-4" to='/statistics'>Statistics</NavLink>
            <NavLink className ="nav-link px-4" to='/blogs'>Blogs</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navigation;