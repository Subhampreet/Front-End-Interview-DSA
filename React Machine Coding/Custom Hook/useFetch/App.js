import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import "./styles.css";

export default function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>An error occured : {error}</h1>;
  }

  console.log(data);

  return (
    <div className="App">
      <h1>Posts</h1>

      {data &&
        data.products?.map((d) => (
          <div key={d.id}>
            <img src={d.thumbnail} />
            <h3>{d.title}</h3>
            <p>{d.description}</p>
          </div>
        ))}
    </div>
  );
}
