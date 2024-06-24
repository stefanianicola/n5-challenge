import { Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart';
import ListItems from '../components/ListItems';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ListItems />} />

      <Route path="/*" element={<Cart />} />
    </Routes>
  );
};
