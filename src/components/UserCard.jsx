export function UserCard({ user }) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="user-card">
      <div className="avatar" aria-hidden="true">
        {initials}
      </div>

      <div className="user-content">
        <div className="user-heading">
          <div>
            <h2>{user.name}</h2>
            <p>@{user.username}</p>
          </div>

          <span className="status-dot" title="Active" />
        </div>

        <dl className="user-details">
          <div>
            <dt>Email</dt>
            <dd>{user.email}</dd>
          </div>

          <div>
            <dt>Phone</dt>
            <dd>{user.phone}</dd>
          </div>

          <div>
            <dt>Company</dt>
            <dd>{user.company.name}</dd>
          </div>

          <div>
            <dt>Website</dt>
            <dd>{user.website}</dd>
          </div>
        </dl>

        <div className="location">
          <span aria-hidden="true">⌖</span>
          <span>
            {user.address.city}, {user.address.zipcode}
          </span>
        </div>
      </div>
    </article>
  );
}
