import { useEffect, useState } from 'react';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Cart from "./pages/Cart"
import ProductDetails from './pages/ProductDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart]= useState([]);

  // fetching data from api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {
      return data.json();
    }).then((res) => {
      setProducts(res);
    }).catch((err) => { console.log(err) })
  }, []);



  const addToCart=(product)=>{
const newAr =[...cart, product]
setCart(newAr)
  }

console.log(cart)
  return (
    <div className="container">
      <Header cart={cart}/>

        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} products={products} />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
