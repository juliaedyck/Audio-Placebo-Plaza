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
  const [validUser, setValidUser] = useState(false);
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
        firstName: firstName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
        setCurrentUser(data.data);
        setProfileId(data.data._id);
        if (data.status === 400) {
          setValidUser(true);
        }
        if (data.status === 200) {
          console.log("logged in");
          window.sessionStorage.setItem(
            "data",
            JSON.stringify(currentUser.firstName)
          );
          setLoggedIn(true);
          setLoading(false)
        //   history.push(`/Profile/${profileId}`)
        }
      });
  };
  console.log(profileId);

  if (loading) {
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

      <Div validUser> user not found!</Div>
    </>
  );

  //   if (validUser === false) {
  //       return (
  //           <>
  //           user not found!</>
  //       )
  //   }
  }
};
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:validuser {
    display: none;
  }
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
