import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import img from "../photos/app_circlelogo.png"

const NewUser = () => {
  const {
    currentUser,
    setCurrentUser,
    setLoggedIn,
    loggedIn,
    password,
    setPassword,
    favourites,
    setFavourites,
    firstName,
    setFirstName,
  } = useContext(CurrentUserContext);

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (firstName && lastName && email && password) {
      fetch(`/new-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          favourites: [],
          notes: "",
          favSound: "",
          noise: "",
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(
              "firstName",
              JSON.stringify(response.message.firstName)
            );

            setCurrentUser(response.message);
            history.push("/");
          }
        });
    }
  };

  return (
    <Container>
      <ImgWrap>
        <Img src={img} alt="team photo" />
</ImgWrap>
      <TheForm onSubmit={handleSubmit}>
        <InfoWrapper>
          <Input2
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(ev) => setFirstName(ev.target.value)}
          />
          <Input2
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(ev) => setLastName(ev.target.value)}
          />
          <Input2
            type="text"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <Input2
            type="text"
            placeholder="create a password"
            value={password}
            minlength="5"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <Button
            type="submit"
            disabled={
              !(firstName && lastName && email && password.length > 5) ? true : false
            }
          >
            Confirm
          </Button>
        </InfoWrapper>
      </TheForm>
    </Container>
  );
};
const Img =styled.img`
height: 300px;
padding-top: 10px;
padding-bottom: 10px;
`

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
align-items: center;
  margin-bottom: 10px;
  height: 200px;
`
const Button = styled.button`
  font-family: var(--font-body);
  background: #336699;
  height: 32px;
  width: 205px;
  border-radius: 16px;
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
`;

const Input = styled.input`
  height: 20px;
  width: 125px;
  margin-left: 10px;
`;

const InfoWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input2 = styled(Input)`
  margin-bottom: 10px;
  border-radius: 20px;
  height: 30px;
  width: 200px;
  border: 2px solid #f7c2ce;
`;
const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TheForm = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export default NewUser;
