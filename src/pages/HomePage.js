import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container className="text-center py-5 mt-5">
      <h1>Welcome to ProductStore</h1>
      <p>Manage and explore products for your needs.</p>
      <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
        View Product
      </Button>
    </Container>
  )
}

/*
*/
