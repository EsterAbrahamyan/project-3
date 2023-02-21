import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <header>
      <div className="menu">
        <div className="logo_box">
          <a className="logo"><img src="img/logo.jpg" /></a></div>


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
              <a className="cart-tt" title="View your shopping cart : ">
                <div className="basket">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <p className="cartIcon">0</p>
                  </div>
              </a>
              </Link>
            
          </ul>
        </div>
      </div >
    </header >
 );
}
export default Header;






  







            
                







        
