export function ErrorState({ message, onRetry }) {
  return (
    <div className="state-card state-card--error" role="alert">
      <div className="state-icon" aria-hidden="true">!</div>
      <h2>Something went wrong</h2>
      <p>{message}</p>

      <button type="button" className="button" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}
