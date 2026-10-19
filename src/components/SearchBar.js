import React from 'react'
import { Form } from 'react-bootstrap'

export default function SearchBar({ search, onSearch }) {
  return (
    <Form.Control
      placeholder="Tìm tên sản phẩm..."
      value={search}
      onChange={(event) => onSearch(event.target.value)}
    />
  )
}
