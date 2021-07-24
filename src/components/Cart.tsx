import { CartStyle } from "../styles/pages/cartStyle";
import { FiShoppingCart } from "react-icons/fi";

export function Cart() {
  return (
    <CartStyle>
      <div className="cart-container">
        <FiShoppingCart size={28} />
        <span>0</span>
      </div>
    </CartStyle>
  );
}
