export function SearchBar({ value, onChange, resultCount }) {
  return (
    <div className="search-area">
      <label htmlFor="user-search">Search users</label>

      <div className="search-input-wrap">
        <span aria-hidden="true">⌕</span>

        <input
          id="user-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search by name, email or company..."
          autoComplete="off"
        />

        {value && (
          <button
            type="button"
            className="clear-button"
            onClick={() => onChange("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <p className="result-count" aria-live="polite">
        {resultCount} {resultCount === 1 ? "user" : "users"} found
      </p>
    </div>
  );
}
