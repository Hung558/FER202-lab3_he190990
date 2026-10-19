import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate();

  return (
    // Căn giữa cả chiều ngang lẫn chiều dọc (trừ chiều cao navbar ~56px)
    <Container
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: 'calc(100vh - 56px)' }}
    >
      <h1 className="display-4 fw-bold">Welcome to ProductStore</h1>
      <p className="text-muted mb-4">Manage and explore products for your needs.</p>
      <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
        View Product
      </Button>
    </Container>
  )
}
