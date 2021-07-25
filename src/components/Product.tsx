import { useCartContext } from "../contexts/CartContext";
import { Products } from "../interfaces/Products";
import { ProductStyle } from "../styles/components/productsStyle";

type ProductProps = {
  products: Products[] | undefined;
};

export function Product({ products }: ProductProps) {
  const { addProductInCart } = useCartContext();

  return (
    <>
      {products?.map((product) => {
        return (
          <ProductStyle key={product.id}>
            <div className="content-img">
              <img src={product.image} alt={product.title} />
            </div>

            <h3>{product.title}</h3>

            <span>R$ {Number(product.price).toFixed(2)}</span>

            <button type="button" onClick={() => addProductInCart(product)}>
              Adicionar ao carrinho
            </button>
          </ProductStyle>
        );
      })}
    </>
  );
}
