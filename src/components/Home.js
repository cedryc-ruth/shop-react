import { faker } from '@faker-js/faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';
import './styles.css';

faker.seed(100);

const Home = () => {
    const productsArray = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.fashion(640,480,true),
    }));
    
    //console.log(productsArray);
    const [cart,setCart] = useState([]);
    console.log(cart);
    const [products] = useState(productsArray);

    return <div className='productContainer'>{products.map((prod)=>(
        <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />
    ))}</div>;
}

export default Home;