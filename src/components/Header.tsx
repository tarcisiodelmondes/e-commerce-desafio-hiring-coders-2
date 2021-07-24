import { AiOutlineSearch } from "react-icons/ai";

import { HeaderStyle } from "../styles/pages/headerStyle";
import { Cart } from "./Cart";

export function Header() {
  return (
    <HeaderStyle>
      <h1>CoreFriday</h1>

      <form>
        <label className="sr-only">O que você procura?</label>
        <input type="text" placeholder="O que você procura?" />

        <button type="button" title="Pesquisar">
          <AiOutlineSearch size={16} />
        </button>
      </form>

      <div className="cart-icon">
        <Cart />
      </div>
    </HeaderStyle>
  );
}
