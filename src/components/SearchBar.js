import React from 'react'
import { Form } from 'react-bootstrap'

// search: chữ đang gõ, onSearch: hàm cập nhật chữ
export default function SearchBar({ search, onSearch }) {
  return (
    <Form.Control
      placeholder="Tìm tên sản phẩm..."
      value={search}
      onChange={(event) => onSearch(event.target.value)}
    />
  )
}
