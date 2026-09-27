export function LoadingState() {
  return (
    <div className="state-card" aria-live="polite" aria-busy="true">
      <div className="spinner" aria-hidden="true" />
      <h2>Loading users...</h2>
      <p>Fetching the latest directory data.</p>
    </div>
  );
}
