import { Link } from "react-router-dom";
import Cart from "./Cart";
import './styles.css';
import { CartContext } from '../context/Context';
import { useContext } from "react";
import { Badge, Container, Dropdown, Form, FormControl, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const {cart} = useContext(CartContext);

    return <Navbar bg="dark" variant="dark" style={{ height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl style={{ width: 500 }}
                    placeholder="Search a product"
                    className="m-auto"
                  />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge bg="success">{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                        <span style={{ padding: 10 }}>Cart is empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
        <span className="header">React Context API Tutorial</span>
        <ul className="nav">
            <li>
                <Link to="/">Home Page</Link>
            </li>
            <li>
                <Link to="/cart">Cart ({ cart.length })</Link>
            </li>
        </ul>
    </Navbar>;
};

export default Header;