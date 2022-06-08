import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"
import { CurrentUserContext } from "./CurrentUserContext"
import { useContext } from "react"

const NavBar = () => {

    const {currentUser} = useContext(CurrentUserContext)
return (

    <Wrapper>
    <StyledNavLink to= "/Form">Get your Audio Placebo</StyledNavLink> 
    <StyledNavLink to= "/About">About</StyledNavLink> 

    {currentUser ? <Span>
            <StyledNavLink to= "/Profile/:profileId">{currentUser}</StyledNavLink>
            </Span>
            :
            
    <StyledNavLink to= "/Login">Login</StyledNavLink> 
            }


    </Wrapper>
)
}

const Wrapper = styled.div`
display: flex;
justify-content: right;
align-items: center;
background-color:  #f7c2ce;
`

const StyledNavLink = styled(NavLink)`
padding: 10px;
color: #669966;
  margin-left: 10px;
  font-family: var(--font-body);
  text-decoration: none;
  outline: none;

  &:hover {
    color: #336699;
  }

  &.active {
    color: #336699;

  }
`


const Span = styled.span``


export default NavBar