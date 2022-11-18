import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Layout from './components/Layout';
import NoPage from './components/NoPage';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home cart={cart} setCart={setCart} />} exact />
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
