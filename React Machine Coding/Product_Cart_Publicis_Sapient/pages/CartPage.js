import CartLayout from "../components/templates/CartLayout";
import CartList from "../components/organisms/CartList";

const CartPage = () => {
  return (
    <CartLayout>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartList />
    </CartLayout>
  );
};

export default CartPage;
