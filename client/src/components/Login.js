import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

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
        console.log(data);
        if (data.status === 400) {
            setInvalidUser(true)
            // console.log(data.data)
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


          history.push(`/profile/${profileId}`)
          console.log(currentUser)
        }
      });
  };

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
            <button>log in</button>
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


`;

const Input = styled.input``;

const Form = styled.form`
  /* z-index: 2; */
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  /* z-index: 2; */
  /* position: absolute; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export default Login;
