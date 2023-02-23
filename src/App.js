import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Assortment from './Assortment';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import Order from './Order';
import { createContext } from 'react';
import { useState } from 'react';



export const myContext = createContext()
function App() {
 const [cart,setCart]= useState([])
  return (
    <div className="App">
      
      <myContext.Provider value={{cart,setCart}}>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/:id' element={<Product/>} />
        <Route path='/about' element={<About />} />
        <Route path='/order' element={<Order />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route path='/assortment' element={<Assortment />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
      </Routes>
      </myContext.Provider>
      

      <Footer/>
    </div>
  );
};
 

export default App;
