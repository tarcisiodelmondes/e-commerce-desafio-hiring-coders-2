import { Products } from "../interfaces/Products";

export function reduceArrayInFourElements(products: Products[]): Products[] {
  const newProducts: Products[] = [];

  products.forEach((product, index) => {
    if (index >= 4) return;

    newProducts.push(product);
  });

  return newProducts;
}
