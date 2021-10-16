import { useContext } from "react";
import { useParams } from "react-router";
import { products } from "../../products";
import { CartContext } from "../../providers/cart";

function ProductDetails(){
  const {id} = useParams();
  const { setCartProducts } = useContext(CartContext);

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