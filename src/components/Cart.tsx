import { CartStyle } from "../styles/components/cartStyle";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../contexts/CartContext";

export function Cart() {
  const { productTotal } = useCartContext();

  return (
    <CartStyle>
      <div className="cart-container">
        <FiShoppingCart size={28} title="Cart icon" />
        <span>{productTotal}</span>
      </div>
    </CartStyle>
  );
}
