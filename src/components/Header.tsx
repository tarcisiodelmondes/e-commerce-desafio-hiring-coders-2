import { AiOutlineSearch } from "react-icons/ai";

import { HeaderStyle } from "../styles/components/headerStyle";
import { Cart } from "./Cart";

export function Header() {
  return (
    <HeaderStyle>
      <h1>CoreFriday</h1>

      <form>
        <label className="sr-only">What are you looking for?</label>
        <input type="text" placeholder="What are you looking for?" />

        <button type="button" title="Search">
          <AiOutlineSearch size={16} />
        </button>
      </form>

      <div className="cart-icon">
        <Cart />
      </div>
    </HeaderStyle>
  );
}
