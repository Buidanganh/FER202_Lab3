function CategoryFilter({ categories, selectedCategory, onChange }) {
  return (
    <div>
      <label className="form-label fw-semibold" htmlFor="category-filter">Danh mục</label>
      <select
        id="category-filter"
        className="form-select"
        value={selectedCategory}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Tất cả danh mục</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
