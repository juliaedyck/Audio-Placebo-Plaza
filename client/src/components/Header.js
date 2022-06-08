import styled from "styled-components"
import { NavLink } from "react-router-dom"


const Header =()=> {

    return (
        <Wrapper>
       
    <StyledNavLink to= "/">AUDIO PLACEBO PLAZA</StyledNavLink>  
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:  #f7c2ce;
`

const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding: 10px;
padding: 10px;

color: #336699;
  font-family: var(--font-body);
  text-decoration: none;
  outline: none;

  &:hover {
    color: #669966;
    
  }

`


export default Header