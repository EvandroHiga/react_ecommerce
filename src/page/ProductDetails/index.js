import { useParams } from "react-router";
import { useCart } from "../../providers/cart";
import { products } from "../../products";

function ProductDetails(){
  const {id} = useParams();
  const { setCartProducts } = useCart();

  let product = products.find((p) => p.id === parseInt(id));
  
  const handleAddItemToCart = () => {
    setCartProducts((previousState) => [...previousState, product]);
  };

  return(
    <>
      <h2>[ Product Details ]</h2>
      <div>
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
        <button onClick={handleAddItemToCart}>Buy</button>
      </div>
    </>
  );  
}

export default ProductDetails;