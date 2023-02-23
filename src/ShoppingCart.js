import React, { useContext } from "react";
import { myContext } from "./App";
// import CartCount from "./CartCount";



function CartCount(props) {
  const { productCount } = props;
  const totalCount = Object.values(productCount).reduce((acc, count) => acc + count, 0);
  return <div>Ընդհ․քանակ: {totalCount}</div>;
}



function ShoppingCart() {
  const { cart } = useContext(myContext);

  const productCount = cart.reduce((count, product) => {
    count[product.id] = count[product.id] ? count[product.id] + 1 : 1;
    return count;
  }, {});

  return (
    <div>
      <CartCount productCount={productCount} />
      <div className="parent">
        {cart.reduce((uniqueElements, element) => {
          if (!uniqueElements.some((el) => el.id === element.id)) {
            uniqueElements.push(element);
          }
          return uniqueElements;
        }, []).map((element) => {
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
                
              </div >
              <div style={{fontSize:15,justifyContent:"center"}}>
              Դուք գնել եք {productCount[element.id]} կտ
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;
