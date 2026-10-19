import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
import { products } from "../data";

const PAGE_SIZE = 3;
const CATEGORIES = ["Điện thoại", "Laptop", "Máy tính bảng"];

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "";
  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesKeyword = product.name
          .toLocaleLowerCase("vi-VN")
          .includes(keyword.toLocaleLowerCase("vi-VN"));
        const matchesCategory = !category || product.category === category;
        return matchesKeyword && matchesCategory;
      }),
    [keyword, category],
  );
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );
  const requestedPage = Number(searchParams.get("page")) || 1;
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const pageProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function updateFilters(nextValues) {
    const next = new URLSearchParams(searchParams);
    Object.entries(nextValues).forEach(([key, value]) => {
      if (value) next.set(key, value);
      else next.delete(key);
    });
    next.delete("page");
    setSearchParams(next);
  }

  function changePage(page) {
    if (page < 1 || page > totalPages) return;
    const next = new URLSearchParams(searchParams);
    if (page === 1) next.delete("page");
    else next.set("page", String(page));
    setSearchParams(next);
  }

  return (
    <section>
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-4">
        <div>
          <p className="text-primary fw-semibold text-uppercase mb-1">
            Kho sản phẩm
          </p>
          <h1 className="mb-0">Danh sách sản phẩm</h1>
        </div>
        <span className="text-secondary">
          Tổng sản phẩm: {filteredProducts.length}
        </span>
      </div>

      <div className="filter-panel mb-4">
        <div className="row g-3 align-items-end">
          <div className="col-md-7">
            <SearchBar
              initialValue={keyword}
              onSearch={(value) => updateFilters({ keyword: value })}
            />
          </div>
          <div className="col-md-5">
            <CategoryFilter
              categories={CATEGORIES}
              selectedCategory={category}
              onChange={(value) => updateFilters({ category: value })}
            />
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="alert alert-info mb-0" role="status">
          Không có sản phẩm nào phù hợp với từ khóa hoặc danh mục đã chọn.
        </div>
      ) : (
        <>
          <div className="table-responsive product-table">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên sản phẩm</th>
                  <th>Danh mục</th>
                  <th>Giá</th>
                  <th className="text-end">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {pageProducts.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changePage}
          />
        </>
      )}
    </section>
  );
}

export default ProductList;
