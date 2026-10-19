import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ProductItem({ product }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price.toLocaleString('en-US')}đ</td>
      <td>
        <Button size="sm" variant="outline-primary" onClick={() => navigate(`/products/${product.id}`)}>
          Chi tiết
        </Button>
      </td>
    </tr>
  )
}
