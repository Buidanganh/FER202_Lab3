import { useEffect, useState } from "react";

function SearchBar({ initialValue, onSearch }) {
  const [keyword, setKeyword] = useState(initialValue);

  useEffect(() => {
    setKeyword(initialValue);
  }, [initialValue]);

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(keyword.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} role="search">
      <label className="form-label fw-semibold" htmlFor="product-search">Tìm kiếm sản phẩm</label>
      <div className="input-group">
        <input
          id="product-search"
          className="form-control"
          type="search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Tìm tên sản phẩm..."
          aria-label="Tìm kiếm theo tên sản phẩm"
        />
        <button className="btn btn-primary" type="submit">Tìm kiếm</button>
      </div>
    </form>
  );
}

export default SearchBar;
