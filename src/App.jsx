import { useMemo, useState } from "react";
import { EmptyState } from "./components/EmptyState";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/LoadingState";
import { SearchBar } from "./components/SearchBar";
import { UserCard } from "./components/UserCard";
import { useUsers } from "./hooks/useUsers";

export default function App() {
  const { users, status, error, retry } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return users;
    }

    return users.filter((user) =>
      [
        user.name,
        user.username,
        user.email,
        user.company.name,
      ].some((value) => value.toLowerCase().includes(query)),
    );
  }, [users, searchTerm]);

  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">React Project</p>
          <h1>User Directory</h1>
          <p>
            Fetch remote data, handle async states, and build a searchable
            interface with React.
          </p>
        </div>

        {status === "success" && (
          <span className="api-status">
            <span />
            API connected
          </span>
        )}
      </header>

      <section className="directory-shell">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          resultCount={filteredUsers.length}
        />

        {status === "loading" && <LoadingState />}

        {status === "error" && (
          <ErrorState message={error} onRetry={retry} />
        )}

        {status === "success" && filteredUsers.length === 0 && (
          <EmptyState searchTerm={searchTerm} />
        )}

        {status === "success" && filteredUsers.length > 0 && (
          <section className="user-grid" aria-label="Users">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </section>
        )}
      </section>

      <footer className="learning-footer">
        <span>useEffect</span>
        <span>Fetch API</span>
        <span>Loading / Error / Empty</span>
        <span>Custom Hook</span>
        <span>Derived Filtering</span>
      </footer>
    </main>
  );
}
