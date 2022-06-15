import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Div>
      <Container>
        <Wrapper>
          <StyledNavLink to="/">AUDIO PLACEBO PLAZA</StyledNavLink>
        </Wrapper>
        <Nav>
          <NavBar />
        </Nav>
      </Container>
    </Div>
  );
};

const Div = styled.span`
  position: fixed;
  top: 0;
  width: 100%;
`;
const Container = styled.div`
  background-color: #f7c2ce;
`;
const Nav = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7c2ce;
  padding-right: 80px;
`;

const StyledNavLink = styled(NavLink)`
margin-left: 100px;
  text-decoration: none;
  padding-top: 10px;
  z-index: 2;
  color: #336699;
  font-family: var(--font-heading);
  text-decoration: none;
  outline: none;
  font-size: 60px;
  &:hover {
    color: #669966;
  }
`;

export default Header;
