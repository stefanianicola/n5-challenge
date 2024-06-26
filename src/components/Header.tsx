import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/CartContext';

function Header() {
  const { totalCompra } = useProducts();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">N5 Challenge</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" onClick={totalCompra}>
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
