import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// Navbar chung cho toàn trang
export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* Bên trái: tên shop, bấm vào thì về trang chủ (role="button" để hiện con trỏ tay) */}
        <Navbar.Brand role="button" onClick={() => navigate('/')}>
          Product Store
        </Navbar.Brand>

        {/* Bên phải: 2 nút chuyển trang */}
        <Nav className="gap-2">
          <Button variant="outline-light" onClick={() => navigate('/')}>Home</Button>
          <Button variant="outline-light" onClick={() => navigate('/products')}>Product</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}
