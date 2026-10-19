import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// Navbar chung cho toàn trang
export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand role="button" onClick={() => navigate('/')}>
          Product Store
        </Navbar.Brand>

        <Nav className="gap-2">
          <Button variant="outline-light" onClick={() => navigate('/')}>Home</Button>
          <Button variant="outline-light" onClick={() => navigate('/products')}>Product</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}
