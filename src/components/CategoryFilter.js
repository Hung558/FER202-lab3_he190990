import React from 'react'
import { Form } from 'react-bootstrap'

// categories: danh sách danh mục [{ id, name }], category: id danh mục đang chọn
export default function CategoryFilter({ categories, category, onChangeCategory }) {
  return (
    <Form.Select value={category} onChange={(event) => onChangeCategory(event.target.value)}>
      <option value="All">Tất cả danh mục</option>
      {categories.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </Form.Select>
  )
}
