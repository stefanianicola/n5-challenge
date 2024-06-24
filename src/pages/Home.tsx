import { useProducts } from '../context/CartContext';
import { ProductI } from '../interfaces/product.interface';

function Home() {
  const { products } = useProducts();

  console.log(products);

  return (
    <>
      <h2>Home Page</h2>
      {products?.map((product: ProductI) => (
        <div>
          <p>{product.name}</p>
          <p>{product.amount}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default Home;
