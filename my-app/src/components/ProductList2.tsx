import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Products {
  id: string;
  title: string;
  thumbnail: string;
  price:number;
}

function ProductList2() {
  const [Product, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);
  const[ searchTerm, setSearchTerm] = useState<string>('');

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      setError("An error occurred");
    } else {
      const data = await response.json();
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error !== null) {
    return <h1 className="text-danger">{error}</h1>;
  }
  const filteredProduct= Product.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className="container">
      <h1 className="text-center">Product List</h1>
      <input
        type="text"
        name="Search"
        id="Search"
        value={searchTerm}
        placeholder="Search for products"
        className="align-content-md-start"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((product) => (
            <div key={product.id} className="col">
              <Link to={`/products/${product.id}`}>
                <div className="card h-100">
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="card-price">${product.price}</h5>
                    <p className="btn btn-primary">View Details</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col">
            <h3 className="text-center">No results found</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList2;
