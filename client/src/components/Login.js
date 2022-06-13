import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { Link, NavLink } from "react-router-dom"


const Login = () => {
  const {
    loggedIn,
    setLoggedIn,
    currentUser,
    setCurrentUser,
    password,
    setPassword,
    firstName,
    setFirstName,
  } = useContext(CurrentUserContext);
  const history = useHistory();

  const [profileId, setProfileId] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);
const [loading, setLoading]= useState(false)

  ///login with email and password
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400) {
            setInvalidUser(true)
            console.log(data.data)
          }
       
  
        if (data.status === 200) {
            setCurrentUser(data.data)
            setProfileId(data.data._id)
            console.log(data.data)
          window.sessionStorage.setItem(
            "data",
            JSON.stringify(currentUser)
          );
          setLoggedIn(true)
          setLoading(false)
          setInvalidUser(false)


          // history.push(`/profile/${currentUser._id}`)
          history.push("/")
          

        }
      });
    };
    console.log(currentUser._id)

  if (loading && !invalidUser) {
    return (
      <>
        loading
      </>
    );
  }else {
  return (
    <>
      <Wrapper>
        <FormContainer>
          <div>Not a user?
          <StyledNavLink to= "/new-user">Make a profile!</StyledNavLink> 
             
             </div>
          <Form onSubmit={onSubmitHandler}>
            <Input
              type="name"
              id="name"
              placeholder="your first name"
              maxLength={100}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Input
              type="password"
              id="password"
              placeholder="your password"
              maxLength={100}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>log in</Button>
          </Form>
        </FormContainer>
      </Wrapper>

     { invalidUser && <Div> user not found!</Div> }
    </>
  );



  }
};
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;



`;

const Input = styled.input`
  margin-bottom: 10px;
  border-radius: 20px;
  height: 30px;
  width: 200px;
  border: 2px solid #f7c2ce;
  `;

const Form = styled.form`
  /* z-index: 2; */
  margin-top: 20px;
  display: flex;
  flex-direction: column;

color: #669966;
  font-family: var(--font-body);
`;

const FormContainer = styled.div`
  /* z-index: 2; */
  /* position: absolute; */
  margin-top: 100px;
  color: #669966;
  font-family: var(--font-body);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;


const StyledNavLink = styled(NavLink)`
padding: 10px;
color: #669966;
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
const Button = styled.button`
font-family: var(--font-body);
background: #336699;
height: 32px;
  width: 205px;
border-radius: 20px;
border: none;
cursor: pointer;
color: #ffff;

  &:hover {
    background: #669966;
    transition: 300ms ease-in-out;
  }

  &:disabled {
    background: #669966;
    cursor: not-allowed;
    transition: none;
  }
`
export default Login
