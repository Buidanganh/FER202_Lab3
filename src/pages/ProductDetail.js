import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../data";

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="empty-state text-center">
        <h1>Không tìm thấy sản phẩm</h1>
        <p className="text-secondary">
          Sản phẩm có mã <strong>{id}</strong> không tồn tại.
        </p>
        <Link to="/products" className="btn btn-primary">
          Quay lại danh sách
        </Link>
      </section>
    );
  }

  return (
    <section className="detail-card">
      <button
        className="btn btn-link p-0 text-decoration-none"
        type="button"
        onClick={() => navigate("/products")}
      >
        ← Quay lại danh sách
      </button>
      <p className="text-primary text-uppercase fw-semibold mt-4 mb-1">
        Chi tiết sản phẩm
      </p>
      <h1>{product.name}</h1>
      <dl className="row mt-4 mb-0">
        <dt className="col-sm-3">ID</dt>
        <dd className="col-sm-9">{product.id}</dd>
        <dt className="col-sm-3">Danh mục</dt>
        <dd className="col-sm-9">{product.category}</dd>
        <dt className="col-sm-3">Giá</dt>
        <dd className="col-sm-9 fw-semibold text-primary">
          {formatPrice(product.price)}
        </dd>
        <dt className="col-sm-3">Mô tả</dt>
        <dd className="col-sm-9">{product.description}</dd>
      </dl>
    </section>
  );
}

export default ProductDetail;
