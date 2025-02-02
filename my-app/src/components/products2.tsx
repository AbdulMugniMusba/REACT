interface Products2 {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
}
interface Products2props {
  products2: Products2[];
}
function Products2(products2props: Products2props) {
  return (
    <div className="container">
      <h1 className="Productslist"></h1>
      <ul>
        {products2props.products2.map((products2) => (
       <div key={products2.id} className="card">
       <h5 className="card-title">{products2.title}</h5>
       <p className="card-text">{products2.description}</p>
       <p className="card-text">{products2.price}</p>
        <p className="card-text">{products2.duration}</p>
          </div>))}
      </ul>
    </div>
  );
}
export default Products2;
