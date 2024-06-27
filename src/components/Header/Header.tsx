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
        <StyledNavBrand href="/">N5 Challenge</StyledNavBrand>
        <Nav className="me-auto">
          <StyledNavLink as={Link} className="nav-link" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink
            as={Link}
            className="nav-link"
            to="/cart"
            onClick={totalCompra}
          >
            Cart
            {list.length > 0 && (
              <StyledBadge bg="danger">{list.length}</StyledBadge>
            )}
          </StyledNavLink>
          <StyledNavLink as={Link} className="nav-link" to="/add-item">
            Add New
          </StyledNavLink>
        </Nav>
      </Container>
    </NavbarWrapper>
  );
}

export default Header;
