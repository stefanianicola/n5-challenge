import { CartProvider } from './context/CartContext';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './shared/GlobalStyle.styled';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './shared/Theme.styled';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')!) || lightTheme
  );
  //localStorage.removeItem('theme');

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToggleTheme toggleTheme={toggleTheme} />
        <Home />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
