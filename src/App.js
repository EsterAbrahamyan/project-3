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


function App() {
  return (
    <div className="App">
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
      <Footer/>
    </div>
  );
}

export default App;
