import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function Cart(){
    const { cartProducts } = useContext(CartContext);

    return(
        <>
            <h3>Cart</h3>
            {cartProducts.map((p) => (
                <div>
                    <span>{p.name}</span>
                    <span>{p.price}</span>
                </div>
            ))}
            
            <form >
                <div>
                    <label for="name"> Name </label> <input id="name" type="text"/>
                </div>
                <div>
                    <label for="address"> Address </label><input id="address" type="text" />
                </div>
                <button class="button" type="submit">Purchase</button>
            </form>
        </>
    );
}

export default Cart;