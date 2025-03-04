import { useState, useEffect } from 'react';

// Custom hook for debouncing
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const DebouncedSearch = () => {
  const [query, setQuery] = useState(''); // User input
  const [results, setResults] = useState([]); // API results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const debouncedQuery = useDebounce(query, 500); // Delay API call by 500ms

  // Fetch search results
  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${debouncedQuery}`
        );
        const data = await res.json();
        setResults(data);
      } catch (err) {
        setError('Failed to fetch results.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
        className="w-full p-2 border rounded"
      />

      {loading && <p className="text-gray-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4">
        {results.length === 0 && debouncedQuery && !loading && (
          <p>No results found.</p>
        )}
        {results.map((user) => (
          <li key={user.id} className="border-b py-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
