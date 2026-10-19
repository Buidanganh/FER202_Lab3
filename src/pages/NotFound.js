import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="empty-state text-center">
      <div className="display-1 fw-bold text-primary">404</div>
      <h1>Không tìm thấy trang</h1>
      <p className="text-secondary">Trang bạn tìm kiếm không tồn tại</p>
      <Link to="/" className="btn btn-primary">Về trang chủ</Link>
    </section>
  );
}

export default NotFound;
