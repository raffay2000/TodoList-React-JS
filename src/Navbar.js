import React from 'react'
import {Nav,Navbar,Button,FormControl,Form} from 'react-bootstrap';

export default function navbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="">ToDo-List</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="">Home</Nav.Link>
      <Nav.Link href="raffayreactapp/about">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

