import styled from "styled-components"
import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"


const Header =()=> {

    return (
      <Div>
      <Container>
        <Wrapper>
       
    <StyledNavLink to= "/">AUDIO PLACEBO PLAZA</StyledNavLink>  
        </Wrapper>
        <Nav>
          <NavBar/>
        </Nav>
        </Container>
        </Div>
    )
}

const Div = styled.span`
position: fixed;
top:0;
width: 100%;

`
const Container = styled.div`


background-color:  #f7c2ce;


`
const Nav = styled.div`
display: flex;
align-items: flex-end;
/* margin-top: 40px; */
/* padding-bottom: 7px;
 margin-left: 10px; */
 `
const Wrapper = styled.div`
display: flex;
justify-content: center;
background-color:  #f7c2ce;
padding-right: 80px;
`

const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding-top: 10px;
z-index: 2;
/* padding: 20px; */

color: #336699;
  font-family: var(--font-heading);
  text-decoration: none;
  outline: none;
  font-size: 60px;
  &:hover {
    color: #669966;
    
  }

`


export default Header