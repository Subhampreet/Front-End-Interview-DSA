import withProductFetch from "./withProductFetch";

function ProductListing({ products }) {
  return (
    <div>
      {products.map((prod) => (
        <div key={prod.id}>
          <h4>{prod.name}</h4>
          <p>{prod.desc}</p>
        </div>
      ))}
    </div>
  );
}

const ProductWrapper = withProductFetch(ProductListing);

export default ProductWrapper;
