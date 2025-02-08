import { useEffect, useState } from "react";
interface Products {
    title: string;
    image: string;
    price: number;
    category: string;
   
}

function ProductsList() {
    const [Products,setProducts] = useState<Products[]>([]);
    const [error, setError] = useState<string | null>(null);
    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/productss");
        if (response.ok == false) {
            setError("An error occurred");
        }
        else {
          const data = await response.json();
        setProducts(data);  
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    if (error !== null) {
        return <h1 className="text-danger">{error}</h1>;
    }


    return (
        <div className="container">
            <h1 className="text-center">Product List</h1>
        <div className="row row-cols-4 row-cols-md-2 g-4">
      {Products.map((product,index) => (
        <div key={index}>
            <img src={product.image} className="card-img-top" alt={product.title} style={{height:"200px",objectFit:"contain"}}/>
          <div className="card-body">
          
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-text">{product.price}</h6>
            <h6 className="card-text">{product.category}</h6>
            </div>
        </div>
        ))}
        </div>
        </div>
    );

}
 export default ProductsList;