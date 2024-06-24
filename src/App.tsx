import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import { GlobalStyle } from './shared/GlobalStyle.styled';

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <Home />
    </CartProvider>
  );
}

export default App;
