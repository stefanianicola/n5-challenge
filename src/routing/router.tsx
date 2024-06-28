import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../components/Cart';
import ListItems from '../components/ListItems';
import AddNewItem from '../components/AddNewItem/AddNewItem';
import TestLogic from '../components/TestLogic';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/n5-challenge" element={<Navigate to="/home" />} />
      <Route path="/n5-challenge/home" element={<ListItems />} />
      <Route path="/n5-challenge/cart" element={<Cart />} />
      <Route path="/n5-challenge/add-item" element={<AddNewItem />} />
      <Route path="/n5-challenge/logica" element={<TestLogic />} />
    </Routes>
  );
};
