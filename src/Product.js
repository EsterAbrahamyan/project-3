// Product.js
import { useParams } from "react-router-dom";
import { data } from "./DataProduct";

function Product() {
  const params = useParams()
  console.log(data[params.id - 1])
      return (
    <div className="child">
      {data[params.id - 1] ? (

        <div>
          <img src={data[params.id - 1].imgSrc} alt={data.id} style={{ width: "100%", height: "auto" }} />
          {/* <img src={data[params.id - 1].imgSrc} /> */}
          {/* { <p>{data[params.id - 1].price}</p> } */}
          {<p>{data[params.id - 1].recept}</p>}
        

        </div>
      )
        : <></>
      }

    </div>
  );
}

export default Product;
