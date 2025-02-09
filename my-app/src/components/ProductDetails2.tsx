import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface products {
  title: string;
  description:string
  id: string; // Ensure this matches the API response
}

function ProductDetails2() {
  const { id } = useParams<{ id: string }>();
  const [products, setproducts] = useState<products | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchproducts = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (response.ok === false) {
      setError("An error occurred");
    } else {
      const data = await response.json();
      setproducts(data);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, [id]);

  if (error !== null) {
    return <h1 className="text-danger">{error}</h1>;
  }

  if (products === null) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{products.title}</h2>
      <p>{products.description}</p>

      <p>
        <b>👤 User ID:</b> {products.id}
      </p>
      <Link to="/" className="btn btn-primary">
        ← Back to products
      </Link>
    </div>
  );
}

export default ProductDetails2;