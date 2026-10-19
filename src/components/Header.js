import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

// Navbar chung cho toàn trang
export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Product Store</Navbar.Brand>

        <div className="d-flex gap-2">
          <Button variant="outline-light" onClick={() => navigate('/')}>Home</Button>
          <Button variant="outline-light" onClick={() => navigate('/products')}>Product</Button>
        </div>
      </Container>
    </Navbar>
  )
}
