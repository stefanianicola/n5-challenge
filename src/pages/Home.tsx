import Header from '../components/Header';
import ListItems from '../components/ListItems';
import { useProducts } from '../context/CartContext';
import { ProductI } from '../interfaces/product.interface';
import { AppRouter } from '../routing/router';

function Home() {
  const { products } = useProducts();

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default Home;
