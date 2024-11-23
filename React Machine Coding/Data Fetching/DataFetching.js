import { useEffect, useState } from "react";

const API = "https://hn.algolia.com/api/v1/search";

export default function DataFetching() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(3);
  const [activeSearch, setActiveSearch] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        if (activeSearch) {
          const result = await fetch(
            `https://dummyapi.online/api/movies/${activeSearch}`
          ).then((response) => response.json());

          console.log(result);
          setData(result);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [activeSearch]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSearchSubmit = (e) => {
    setActiveSearch(search);
    setSearch("");

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <p>{data.movie}</p>
          <p>{data.rating}</p>
        </div>
      )}
    </div>
  );
}
