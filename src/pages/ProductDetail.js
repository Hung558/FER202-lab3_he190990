import React from 'react'
import { Alert, Button, Card, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/products'

// Trang chi tiết: lấy id từ đường dẫn /products/:id
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // id trên URL là chuỗi nên đổi sang số trước khi so sánh
  const product = products.find((item) => item.id === Number(id));

  return (
    <Container className="py-4">
      {/* Dòng 1: nút quay lại */}
      <Button variant="outline-secondary" className="mb-3" onClick={() => navigate('/products')}>
        Quay lại danh sách
      </Button>

      {/* Không có sản phẩm thì báo lỗi, có thì hiện thông tin */}
      {!product ? (
        <Alert variant="warning">Không tìm thấy sản phẩm.</Alert>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title as="h1">{product.name}</Card.Title>
            <Card.Text className="mb-1"><strong>ID:</strong> {product.id}</Card.Text>
            <Card.Text className="mb-1"><strong>Danh mục:</strong> {product.category}</Card.Text>
            <Card.Text><strong>Giá:</strong> {product.price.toLocaleString('en-US')}đ</Card.Text>
            <hr />
            <Card.Text><strong>Mô tả:</strong> {product.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  )
}
