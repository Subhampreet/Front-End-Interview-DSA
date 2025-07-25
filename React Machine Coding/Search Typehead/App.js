import { useEffect, useState } from "react";
import "./styles.css";

let nextId = 0;

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setLoading(false);
      setSuggestions([]);
      setError(null);
      setShowSuggestion(false);
      return;
    }

    setShowSuggestion(true);

    const fetchUser = async () => {
      setLoading(true);
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("Failed to fetch data");

        let result = await res.json();
        console.log(result);
        let filteredSearch = result.filter((data) => {
          return data.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setSuggestions(filteredSearch);
      } catch (error) {
        setError(error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    let debounceTimer = setTimeout(() => {
      fetchUser();
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  const handleSelectSuggestion = (user) => {
    setSearchTerm(user.name);
    setSuggestions([]);
    setShowSuggestion(false);

    console.log(user.name);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="search user..."
      />

      {loading && <div className="loading-spinner">Loading...</div>}
      {error && <div className="error-message">{error.message}</div>}

      {showSuggestion && !loading && !error && (
        <div>
          {suggestions.map((user) => (
            <div key={user.id} onClick={() => handleSelectSuggestion(user)}>
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
