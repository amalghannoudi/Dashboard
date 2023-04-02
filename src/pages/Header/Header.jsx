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
       
          <button class="btn" onClick={TosignIn}>Sign In</button>

      </Container>
    </Navbar>
    </div>
  )
}

export default Header
