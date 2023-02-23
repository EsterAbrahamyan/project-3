import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import {myContext} from './App';



function Header() {
  const {cart}=useContext(myContext)
  console.log(cart)
  return (
    <header>
      <div className="menu">
        <div className="logo_box">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="logo" href ="#"><img src="img/logo.jpg" alt=""/></a></div>


        <div className="menulist">
          <p className="logotext">SweetEst</p>
          <div className="telnumber">
            <li><Link to='/tel:+37498101111'><strong>Անվճար առաքում</strong><br />հեռ․ 098101111 </Link></li>
          </div>
          <ul className="nav">

            <li><Link to='/about'>Մեր մասին</Link></li>
            <li><Link to='/assortment'>Տեսականի</Link></li>
            <li><Link to='/contact'>Կապ</Link></li>
            <Link to='/shoppingcart'>
              {/* <a className="cart-tt" href="" title="View your shopping cart : "> */}
                <div className="basket">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <p className="cartIcon">{cart.length>0 && cart.length}</p>
                  </div>
              {/* </a> */}
              </Link>
              
            
          </ul>
        </div>
      </div >
    </header >
    
 );
}



export default Header;






  







            
                







        
