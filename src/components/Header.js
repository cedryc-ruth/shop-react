import { Link } from "react-router-dom";
import Cart from "./Cart";
import './styles.css';
import { CartContext } from '../Context';
import { useContext } from "react";

const Header = () => {
    const {cart} = useContext(CartContext);

    return <div>
        <span className="header">React Context API Tutorial</span>
        <ul className="nav">
            <li>
                <Link to="/">Home Page</Link>
            </li>
            <li>
                <Link to="/cart">Cart ({ cart.length })</Link>
            </li>
        </ul>
    </div>;
};

export default Header;