// Product.js
import { useParams,} from "react-router-dom";
import { useEffect,useState } from "react";
// import { data } from "./DataProduct";

function Product() {
  const {id} = useParams()
  console.log(id)
   const [cakeData,setCakeData]=useState([]);
  useEffect(()=>{

    fetch('http://localhost:3001/get/'+id)
    .then(res=>res.json())
    .then(res=>setCakeData(res));
  },[id])
    
  
      return (
    <div className="child">
     <img src={cakeData.imgSrc} alt={cakeData.name} />
     <p>
                <strong>{cakeData.name}</strong>
                <br />
                {cakeData.price}դր/1կտ
                <br />
                </p>
     
     

    </div>
  );
}

export default Product;
