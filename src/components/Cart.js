import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from '../context/Context';

const Cart = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr)=> acc + Number(curr.price),0));
    },[cart]);

    return <div>{console.log(cart)}
        <span style={{ fontSize: 30 }}>My Cart</span>
        <span style={{ fontSize: 30 }}>Total: {total}&nbsp;€</span>
        <div className="productContainer">
            {cart.map((prod) => (
                <SingleProduct prod={prod} key={prod.id} />
            ))}
        </div>
    </div>;
}

export default Cart;