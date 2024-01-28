import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { useLocation } from 'react-router-dom';

const TopBar = () => {
  
  let location = useLocation()
  let active = "activeNav";
  
  console.log(location.pathname)
    let navigate = useNavigate()
  return (
    <Navbar expand="lg" data-bs-theme="dark" bg='dark' className="bg-body-tertiary">
    <Container>
      <Navbar.Brand><FaUsers className='navIcon' /> Zen Class</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className={`${location.pathname === '/'? "navItem" : ""}`} onClick={()=>navigate("/")}><MdSpaceDashboard className={`navIcon ${location.pathname === '/'? active : ""}`} />Dashboard</Nav.Link>
          <Nav.Link className={`${location.pathname === '/mentor'? "navItem" : ""}`} onClick={()=>navigate("/mentor")}><FaUserPlus className={`navIcon ${location.pathname === '/mentor'? active : ""}`} />Add Mentor</Nav.Link>
          <Nav.Link className={`${location.pathname === '/student'? "navItem" : ""}`} onClick={()=>navigate("/student")}><FaUserPlus className={`navIcon ${location.pathname === '/student'? active : ""}`} />Add Student</Nav.Link>
          <Nav.Link className={`${location.pathname === '/all-student'? "navItem" : ""}`} onClick={()=>navigate("/all-student")}><FaUserPlus className={`navIcon ${location.pathname === '/all-student'? active : ""}`} />All Student</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default TopBar