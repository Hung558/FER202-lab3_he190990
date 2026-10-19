import React from 'react'
import { Pagination } from 'react-bootstrap'


export default function PaginationBar({ page, totalPages, onChangePage }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="mb-0">
      <Pagination.Prev disabled={page === 1} onClick={() => onChangePage(page - 1)}>
        Trước
      </Pagination.Prev>

      {pageNumbers.map((number) => (
        <Pagination.Item key={number} active={number === page} onClick={() => onChangePage(number)}>
          {number}
        </Pagination.Item>
      ))}

      <Pagination.Next disabled={page === totalPages} onClick={() => onChangePage(page + 1)}>
        Sau
      </Pagination.Next>
    </Pagination>
  )
}
