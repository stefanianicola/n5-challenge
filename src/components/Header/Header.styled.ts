import { Badge, Nav, Navbar } from "react-bootstrap";
import { styled } from "styled-components";

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

export const StyledBadge = styled(Badge)`
  border-radius: 50px;
  position: absolute;
  top: 10px;
  padding: 2px 4px;
`;