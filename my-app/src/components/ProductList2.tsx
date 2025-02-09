import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Products {
    id: string;
    title: string;
    
   
}

function ProductList2() {    
    const [products,setproducts] = useState<Products[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchproducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        if (response.ok == false) {
            setError("An error occurred");
        }
        else {
          const data = await response.json();
        setproducts(data.products);  
        }
    };
    useEffect(() => {
        fetchproducts();
    }, []);
    if (error !== null) {
        return <h1 className="text-danger">{error}</h1>;
    }


    return (
        <div className="container">
            <h1 className="text-center">Product List</h1>
        <div className="row row-cols-4 row-cols-md-2 g-4">
      {products.map((products,) => (
        <div key={products.id}>
          <h5 className="card-title">{products.title}</h5>

          <Link to={`/products/${products.id}`} > View Product </Link>
          

        </div>
        
        ))}
        </div>
        </div>
    );

}
 export default ProductList2;