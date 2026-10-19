import { Link } from "react-router-dom";

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0
  }).format(price);
}

function ProductItem({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td className="fw-semibold">{product.name}</td>
      <td><span className="badge text-bg-light border">{product.category}</span></td>
      <td className="text-nowrap">{formatPrice(product.price)}</td>
      <td className="text-end">
        <Link className="btn btn-sm btn-outline-primary" to={`/products/${product.id}`}>Xem chi tiết</Link>
      </td>
    </tr>
  );
}

export default ProductItem;
