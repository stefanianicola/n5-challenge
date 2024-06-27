import { Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart';
import ListItems from '../components/ListItems';
import AddNewItem from '../components/AddNewItem/AddNewItem';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ListItems />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/add-item" element={<AddNewItem />} />
    </Routes>
  );
};
