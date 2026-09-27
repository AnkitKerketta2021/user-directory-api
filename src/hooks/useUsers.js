import { useCallback, useEffect, useState } from "react";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const fetchUsers = useCallback(async (signal) => {
    setStatus("loading");
    setError("");

    try {
      const response = await fetch(USERS_API, { signal });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Unexpected API response.");
      }

      setUsers(data);
      setStatus("success");
    } catch (requestError) {
      if (requestError.name === "AbortError") {
        return;
      }

      setError(requestError.message || "Unable to load users.");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal);

    return () => controller.abort();
  }, [fetchUsers]);

  const retry = useCallback(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal);

    return () => controller.abort();
  }, [fetchUsers]);

  return {
    users,
    status,
    error,
    retry,
  };
}
