import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { useContext } from "react";

const NavBar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Wrapper>
      <StyledNavLink to="/Form">GET AN AUDIO PLACEBO</StyledNavLink>
      <StyledNavLink to="/About">ABOUT</StyledNavLink>

      {currentUser ? (
        <Span>
          <StyledNavLink to={`/profile/${currentUser._id}`}>
            {currentUser.firstName}
          </StyledNavLink>
        </Span>
      ) : (
        <StyledNavLink to="/Login">LOG IN</StyledNavLink>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  justify-content: flex-end;
  background-color: #f7c2ce;
  height: 30px;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: #669966;
  margin-right: 10px;
  font-family: var(--font-body);
  text-decoration: none;
  outline: none;

  &:hover {
    color: #336699;
  }

  &.active {
    color: #336699;
  }
`;

const Span = styled.span``;

export default NavBar;
