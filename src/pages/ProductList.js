import React from 'react'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import PaginationBar from '../components/Pagination'
import ProductItem from '../components/ProductItem'

// Số sản phẩm trên 1 trang
const PAGE_SIZE = 3;

export default function ProductList() {
  // Mọi trạng thái đều lưu trên URL, vd: /products?keyword=iphone&category=Phone&sort=price-asc&page=2
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'none';
  const page = Number(searchParams.get('page')) || 1;

  // Cập nhật 1 param trên URL
  function updateParam(key, value) {
    const newParams = new URLSearchParams(searchParams);

    // Giá trị mặc định (ô trống, "All", "none", trang 1) thì xoá param cho URL gọn
    if (value === '' || value === 'All' || value === 'none' || value === 1) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    // Đổi keyword / category / sort thì quay về trang 1
    if (key !== 'page') {
      newParams.delete('page');
    }

    setSearchParams(newParams);
  }

  // 1. Lọc theo danh mục
  // Tìm tên tiếng Việt của danh mục đang chọn, vd: "Phone" -> "Điện thoại"
  const selectedCategory = categories.find((item) => item.id === category);

  let shownProducts = products.filter((product) =>
    category === 'All' || (selectedCategory && product.category === selectedCategory.name)
  );

  // 2. Lọc theo tên
  shownProducts = shownProducts.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  // 3. Sắp xếp
  if (sort === 'price-asc') {
    shownProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    shownProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'name-asc') {
    shownProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'name-desc') {
    shownProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  // 4. Phân trang
  const totalPages = Math.max(1, Math.ceil(shownProducts.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageProducts = shownProducts.slice(start, start + PAGE_SIZE);

  return (
    <Container className="py-4">
      {/* Dòng 1: search (to nhất) | filter | sort */}
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
            <option value="price-asc">Giá: thấp → cao</option>
            <option value="price-desc">Giá: cao → thấp</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Dòng 2: tổng số + phân trang */}
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

      {/* Dòng 3: bảng sản phẩm */}
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
