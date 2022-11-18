import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Cart = (props) => {
    const cart = props.cart;
    const setCart = props.setCart;

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr)=> acc + Number(curr.price),0));
    },[cart]);

    return <div>{console.log(props.cart)}
        <span style={{ fontSize: 30 }}>My Cart</span>
        <span style={{ fontSize: 30 }}>Total: {total}&nbsp;€</span>
        <div className="productContainer">
            {cart.map((prod) => (
                <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />
            ))}
        </div>
    </div>;
}

export default Cart;