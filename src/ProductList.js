import { data } from "./DataProduct";
import { Link } from "react-router-dom";

export default function ProductList() {
    return (
        <div className="parent">
            {data.map((element) => {
                return (
                    <div key={element.id}>
                    
                        <div className="child">
                            
                        <Link to={`/${element.id}`}>
                            <img src={element.imgSrc} alt={element.id}/>
                            </Link>
                            <p>
                                <strong>{element.name}</strong>
                                <br />
                                {element.price}դր/1կտ
                                <br />
                                <button className="btn">Գնել</button>
                            </p>
                        </div>
                    

                </div>
                );
            })}
        </div>
    );
}
