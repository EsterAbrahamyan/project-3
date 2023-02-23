import { data } from './DataProduct';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {myContext} from './App';


export default function ProductList() {
  // const handleClick = () => {
  //   props.updateCartValue(props.cartValue + 1);
  // };
 
  

  const {cart,setCart}=useContext(myContext)
  
  console.log(cart)
  return (
    <div className="parent">
      {data.map((element) => {
        return (
          <div key={element.id}>
            <div className="child">
              <Link to={`/${element.id}`}>
                <img src={element.imgSrc} alt={element.id} />
              </Link>
              <p>
                <strong>{element.name}</strong>
                <br />
                {element.price}դր/1կտ
                <br />
                <button className="btn" onClick={()=>setCart([...cart,element])}>
                  Գնել
                </button>
                
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
