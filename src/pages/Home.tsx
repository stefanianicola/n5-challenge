import Header from '../components/Header';
import { AppRouter } from '../routing/router';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default Home;
