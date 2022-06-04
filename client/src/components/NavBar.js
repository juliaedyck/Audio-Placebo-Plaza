import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

return (

    <Wrapper>
    <StyledNavLink to= "/Form">Get your Audio Placebo</StyledNavLink> 
    <StyledNavLink to= "/About">About</StyledNavLink> 
    <StyledNavLink to= "/Login">Login</StyledNavLink> 


    </Wrapper>
)
}

const Wrapper = styled.div`
display: flex;
justify-content: right;
`

const StyledNavLink = styled(NavLink)`
padding: 10px;`


export default NavBar