export const fetchCart = async () => {
    const response = await fetch("https://fakestoreapi.com/carts/1");
    return response.json();
  };
  
  export const fetchProduct = async (productId) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response.json();
  };
  