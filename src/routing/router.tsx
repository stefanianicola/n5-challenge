import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../components/Cart';
import ListItems from '../components/ListItems';
import AddNewItem from '../components/AddNewItem/AddNewItem';
import TestLogic from '../components/TestLogic';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<ListItems />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/add-item" element={<AddNewItem />} />
      <Route path="/logica" element={<TestLogic />} />
    </Routes>
  );
};
