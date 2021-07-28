import { useContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { Products } from "../interfaces/Products";
import { loadLocalStorage } from "../utils/loadLocalStorage";
import { saveInLocalStorage } from "../utils/saveInLocalStorage";

export interface CartContextData {
  productTotal: number;
  addProductInCart: (product: Products) => void;
  productTotalCount: () => void;
}

type CartContextProvider = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProvider) {
  const [productTotal, setProductTotal] = useState(0);
  const [productsInCart, setProductsInCart] = useState<Products[]>([]);

  function addProductInCart(product: Products) {
    setProductsInCart((productsInCart) => [...productsInCart, product]);
  }

  function productTotalCount() {
    const products = loadLocalStorage("@coreFriday:cart");

    setProductTotal(products?.length || 0);
  }

  useEffect(() => {
    const products = loadLocalStorage("@coreFriday:cart");

    saveInLocalStorage("@coreFriday:cart", products ?? []);

    setProductsInCart((productsInCart) => [...(products ?? [])]);

    productTotalCount();
  }, []);

  useEffect(() => {
    saveInLocalStorage("@coreFriday:cart", productsInCart);

    productTotalCount();
  }, [productsInCart]);

  return (
    <CartContext.Provider
      value={{ productTotal, addProductInCart, productTotalCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
