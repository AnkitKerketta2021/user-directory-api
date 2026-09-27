export function EmptyState({ searchTerm }) {
  return (
    <div className="state-card">
      <div className="state-icon" aria-hidden="true">⌕</div>
      <h2>No users found</h2>
      <p>
        Nothing matched <strong>“{searchTerm}”</strong>. Try another
        name, email, or company.
      </p>
    </div>
  );
}
