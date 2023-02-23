import React, { useState } from 'react';
import {myContext} from './App';
import {useContext} from 'react';



function ShoppingCart() {
  // const [cartValue, setCartValue] = useState(0);

  // function handleClick () {
  //   setCartValue(cartValue + 1);
  // };
  const {cart}=useContext(myContext)
  console.log(cart)

  return (
// //     <div className="shop_cart">
// //       <a className="cart-tt" href="/" title="View your shopping cart : ">
// //         <div className="basket">
// //           <i className="fa-solid fa-cart-shopping"></i>
// //           <p className="cartIcon"></p>
// // </div>
//       </a>
//       {/* <button className="btn" onClick={handleClick}>Գնել</button> */}
//     </div>
<div className="parent">
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <div className="child">
              
                <img src={element.imgSrc} alt={element.id} />
              
              <p>
                <strong>{element.name}</strong>
                <br />
                {element.price}դր/1կտ
                <br />
                
                
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
  }  

export default ShoppingCart;