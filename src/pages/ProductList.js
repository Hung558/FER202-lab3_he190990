import React from 'react'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import PaginationBar from '../components/Pagination'
import ProductItem from '../components/ProductItem'

const PAGE_SIZE = 3;

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'none';
  const page = Number(searchParams.get('page')) || 1;

  function updateParam(key, value) {
    const newParams = new URLSearchParams(searchParams);

    if (value === '' || value === 'All' || value === 'none' || value === 1) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    if (key !== 'page') {
      newParams.delete('page');
    }

    setSearchParams(newParams);
  }

  const selectedCategory = categories.find((item) => item.id === category);

  let shownProducts = products.filter((product) =>
    category === 'All' || (selectedCategory && product.category === selectedCategory.name)
  );

  shownProducts = shownProducts.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  if (sort === 'price-asc') {
    shownProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    shownProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'name-asc') {
    shownProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'name-desc') {
    shownProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  const totalPages = Math.max(1, Math.ceil(shownProducts.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageProducts = shownProducts.slice(start, start + PAGE_SIZE);

  return (
    <Container className="py-4">
      <Row className="mb-3 g-2">
        <Col md={6}>
          <SearchBar search={search} onSearch={(value) => updateParam('keyword', value)} />
        </Col>
        <Col md={3}>
          <CategoryFilter
            categories={categories}
            category={category}
            onChangeCategory={(value) => updateParam('category', value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select value={sort} onChange={(event) => updateParam('sort', event.target.value)}>
            <option value="none">Sắp xếp: Mặc Định</option>
            <option value="price-asc">Giá: thấp đến cao</option>
            <option value="price-desc">Giá: cao đến thấp</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col>
          Tổng: {shownProducts.length} | Trang: {page}/{totalPages}
        </Col>
        <Col xs="auto">
          <PaginationBar
            page={page}
            totalPages={totalPages}
            onChangePage={(number) => updateParam('page', number)}
          />
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {pageProducts.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-muted">Không tìm thấy sản phẩm nào.</td>
            </tr>
          ) : (
            pageProducts.map((product) => <ProductItem key={product.id} product={product} />)
          )}
        </tbody>
      </Table>
    </Container>
  )
}
