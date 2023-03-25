import React from 'react'
import {Navbar,Nav,Container,NavDropdown,Form,Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate=useNavigate();

    const TosignIn=()=>{
     navigate("/login");
    }
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/add">Add Products</Nav.Link>
            <Nav.Link href="/update">Update Products</Nav.Link>
            <Nav.Link href="/delete">Delete Products</Nav.Link>

            
            
          
          </Nav>
          <button class="btn" onClick={TosignIn}>Sign In</button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
