function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="mt-4" aria-label="Phân trang sản phẩm">
      <ul className="pagination justify-content-center mb-0">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Trước
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li
              className={`page-item ${page === currentPage ? "active" : ""}`}
              key={page}
            >
              <button
                className="page-link"
                type="button"
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ),
        )}
        <li
          className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Sau
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
