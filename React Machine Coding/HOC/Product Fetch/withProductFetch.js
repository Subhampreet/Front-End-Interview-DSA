import { useEffect, useState } from "react";

export default function withProductFetch(WrappedComponent) {
  return function WithProductFetch(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const productData = [
            { id: 0, name: "mac", desc: "a macbook" },
            { id: 1, name: "iphone", desc: "a macbook" },
            { id: 2, name: "airpod", desc: "a macbook" },
          ];
          setData(productData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return <WrappedComponent {...props} products={data} />;
  };
}
