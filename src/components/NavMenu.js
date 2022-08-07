
import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap";



function NavMenu({ currentPage, handlePageChange}){

  return(
<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Stephania Alexis</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home" onClick={() => handlePageChange('Home')}>Home</Nav.Link>
            <Nav.Link href="#project" onClick={() => handlePageChange('Project')}>Projects</Nav.Link>
             <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} >Resume</Nav.Link>
            <Nav.Link href="#contact"onClick={() => handlePageChange('Contact')} >Contact</Nav.Link>
            <Nav.Link href="#aboutme" onClick={() => handlePageChange('About-Me')}>About Me</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    
  )
}


export default NavMenu;