import { useContext, useState } from 'react';
import { CartContext } from '../context/Context';

const SingleProduct = ({ prod }) => {
    const {cart, setCart} = useContext(CartContext);

    return (
        <div className="products">
            <img src={prod.image} alt={prod.name} />
            <div className="productDesc">
                <span style={{ fontWeight: 700}}>{prod.name}</span>
                <span>{prod.price%1==0 ? parseInt(prod.price) : prod.price}&nbsp;€</span>
            </div>            
            {cart.includes(prod) ? (
                <button className="add" onClick={() => {
                    setCart(cart.filter(c => c.id!==prod.id));
                }}>Remove from cart</button>
            ) : (
                <button className="add" onClick={() => {
                    setCart([...cart,prod]);
                }}>Add to cart</button>
            )}           
        </div>
    );
}

export default SingleProduct;