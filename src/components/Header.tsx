import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/CartContext';
import styled from 'styled-components';

export const NavbarWrapper = styled(Navbar)`
  background-color: ${(props) => props.theme.topBgPattern};
  color: ${(props) => props.theme.primaryText};
`;

export const StyledNavLink = styled(Nav.Link)`
  color: ${(props) => props.theme.primaryText} !important;
`;
export const StyledNavBrand = styled(Navbar.Brand)`
  color: ${(props) => props.theme.primaryText} !important;
`;

function Header() {
  const { totalCompra } = useProducts();
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
          </StyledNavLink>
        </Nav>
      </Container>
    </NavbarWrapper>
  );
}

export default Header;
