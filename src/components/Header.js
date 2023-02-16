import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://tse4.mm.bing.net/th?id=OIP.Gjgs0c1XINaM6FW4XhvnDgHaIu&pid=Api&P=0"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            &nbsp; Foody
          </Navbar.Brand>
        </Container>
      </Navbar>

  )
}

