import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate();

  return (
    // text-center: căn giữa, py-5 mt-5: cách xa navbar cho nội dung nằm giữa trang
    <Container className="text-center py-5 mt-5">
      <h1 className="display-4 fw-bold">Welcome to ProductStore</h1>
      <p className="text-muted mb-4">Manage and explore products for your needs.</p>
      <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
        View Product
      </Button>
    </Container>
  )
}

/*
*/
