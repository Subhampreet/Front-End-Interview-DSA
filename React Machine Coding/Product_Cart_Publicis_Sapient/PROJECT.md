# React Cart Page using Atomic Design

## 📌 Overview
This project implements a **Cart Page** in React using the **Atomic Design** methodology. It fetches cart details from an API and displays product details dynamically.

## 📁 Folder Structure
```
/src
  /components
    /atoms
      ├── Button.js
      ├── Image.js
      ├── Typography.js
    /molecules
      ├── ProductCard.js
    /organisms
      ├── CartList.js
    /templates
      ├── CartLayout.js
  /pages
    ├── CartPage.js
  /services
    ├── api.js
  /App.js
```

## 🌐 API Endpoints Used
1. **Fetch cart details** → `https://fakestoreapi.com/carts/1`
2. **Fetch product details (using product ID)** → `https://fakestoreapi.com/products/{id}`

## 🚀 Features
✅ Fetch cart items from API  
✅ Fetch product details dynamically  
✅ Display product details (image, title, price)  
✅ Remove items from the cart  
✅ Uses **Atomic Design** for scalability  
✅ Simple & clean UI with Tailwind CSS  

## 📦 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/cart-page-atomic.git
   cd cart-page-atomic
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 🏗️ Component Breakdown

### 1️⃣ **Atoms** (Smallest UI elements)
#### **Button.js**
```javascript
const Button = ({ children, onClick }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
    {children}
  </button>
);
export default Button;
```
#### **Image.js**
```javascript
const Image = ({ src, alt }) => (
  <img className="w-16 h-16 object-cover" src={src} alt={alt} />
);
export default Image;
```
#### **Typography.js**
```javascript
const Typography = ({ variant = "p", children }) => {
  const Tag = variant;
  return <Tag className="text-gray-800">{children}</Tag>;
};
export default Typography;
```

### 2️⃣ **Molecules** (Combination of atoms)
#### **ProductCard.js**
```javascript
import Image from "../atoms/Image";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className="flex items-center p-4 border-b">
      <Image src={product.image} alt={product.title} />
      <div className="ml-4 flex-grow">
        <Typography variant="h3">{product.title}</Typography>
        <Typography>${product.price}</Typography>
      </div>
      <Button onClick={() => onRemove(product.id)}>Remove</Button>
    </div>
  );
};
export default ProductCard;
```

### 3️⃣ **Organisms** (Sections of the page)
#### **CartList.js**
```javascript
import { useEffect, useState } from "react";
import ProductCard from "../molecules/ProductCard";
import { fetchCart, fetchProduct } from "../../services/api";

const CartList = () => {
  const [cartProducts, setCartProducts] = useState([]);
  
  useEffect(() => {
    const loadCart = async () => {
      const cart = await fetchCart();
      const productPromises = cart.products.map((p) => fetchProduct(p.productId));
      const products = await Promise.all(productPromises);
      setCartProducts(products);
    };

    loadCart();
  }, []);

  const handleRemove = (productId) => {
    setCartProducts(cartProducts.filter((p) => p.id !== productId));
  };

  return (
    <div>
      {cartProducts.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={handleRemove} />
      ))}
    </div>
  );
};
export default CartList;
```

### 4️⃣ **Templates** (Layout structure)
#### **CartLayout.js**
```javascript
const CartLayout = ({ children }) => {
  return <div className="max-w-4xl mx-auto p-6">{children}</div>;
};
export default CartLayout;
```

### 5️⃣ **Pages** (Complete page views)
#### **CartPage.js**
```javascript
import CartLayout from "../templates/CartLayout";
import CartList from "../organisms/CartList";

const CartPage = () => {
  return (
    <CartLayout>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartList />
    </CartLayout>
  );
};
export default CartPage;
```

### 6️⃣ **Services** (API Calls)
#### **api.js**
```javascript
export const fetchCart = async () => {
  const response = await fetch("https://fakestoreapi.com/carts/1");
  return response.json();
};

export const fetchProduct = async (productId) => {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  return response.json();
};
```

### 7️⃣ **App.js** (Entry Point)
```javascript
import CartPage from "./pages/CartPage";

function App() {
  return <CartPage />;
}
export default App;
```

## 📌 Next Steps
🔹 Add a **loading state** while fetching products  
🔹 Add a **checkout button**  
🔹 Improve styling with **Tailwind CSS**  

## 💡 Conclusion
This project demonstrates how to build a scalable **Cart Page** using **React and Atomic Design**. It follows best practices for **component reusability** and **API integration**. 🚀

---

Happy Coding! 🎯

