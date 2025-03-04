Here’s a **Debounced Search Box** in React that efficiently fetches search results from an API while preventing unnecessary API calls.  

---

### **📌 Features:**
✅ Uses **debouncing** to delay API calls while typing.  
✅ Fetches **search results from an API**.  
✅ Shows a **loading indicator** while fetching results.  
✅ Handles **empty and error states gracefully**.  

---

### **📜 Full Code for Debounced Search Box**
```jsx
import { useState, useEffect } from "react";

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

const DebouncedSearchBox = () => {
  const [query, setQuery] = useState(""); // User input
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
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${debouncedQuery}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        setError("Failed to fetch results.");
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
        {results.length === 0 && debouncedQuery && !loading && <p>No results found.</p>}
        {results.map((user) => (
          <li key={user.id} className="border-b py-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearchBox;
```

---

### **🚀 How It Works**
1. **Uses a `useDebounce` hook** to delay API requests while the user types.  
2. **Fetches data from a fake API (`jsonplaceholder.typicode.com/users?name_like=query`).**  
3. **Displays results, a loading state, and handles errors.**  
4. **Prevents unnecessary API calls**, optimizing performance.  

---

### **📌 How to Use**
1. Save the file as `DebouncedSearchBox.js`.  
2. Import and use it in `App.js`:  
```jsx
import DebouncedSearchBox from "./DebouncedSearchBox";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <DebouncedSearchBox />
    </div>
  );
}

export default App;
```
