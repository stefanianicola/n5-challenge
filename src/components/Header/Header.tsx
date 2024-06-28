import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useProducts } from '../../context/CartContext';
import {
  NavbarWrapper,
  StyledNavLink,
  StyledNavBrand,
  StyledBadge,
} from './Header.styled';

function Header() {
  const { totalCompra, list } = useProducts();
  return (
    <NavbarWrapper>
      <Container>
        <StyledNavBrand href="/n5-challenge">N5 Challenge</StyledNavBrand>
        <Nav className="me-auto">
          <StyledNavLink as={Link} className="nav-link" to="/n5-challenge/home">
            Home
          </StyledNavLink>
          <StyledNavLink
            as={Link}
            className="nav-link"
            to="/n5-challenge/cart"
            onClick={totalCompra}
          >
            Cart
            {list.length > 0 && (
              <StyledBadge bg="danger">{list.length}</StyledBadge>
            )}
          </StyledNavLink>
          <StyledNavLink
            as={Link}
            className="nav-link"
            to="/n5-challenge/add-item"
          >
            Add New
          </StyledNavLink>
          <StyledNavLink
            as={Link}
            className="nav-link"
            to="/n5-challenge/logica"
          >
            Test Logica
          </StyledNavLink>
        </Nav>
      </Container>
    </NavbarWrapper>
  );
}

export default Header;
