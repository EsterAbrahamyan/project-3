import React, { useState } from 'react';


function ShoppingCart() {
  const [cartValue, setCartValue] = useState(0);

  const handleButtonClick = () => {
    setCartValue(cartValue + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Գնել</button>
      <span className="cartIcon">{cartValue}</span>
    </div>
  );
}

export default ShoppingCart;