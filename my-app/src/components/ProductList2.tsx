import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  thumbnail: string;
}

function ProductList2() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="container">
      <h1 className="text-center">Product List</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <Link to={`/products/${product.id}`} >
              <div className="card h-100">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="btn btn-primary"> view details</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList2;
