import styled from "styled-components";
import { useState  } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {


     //state variables here
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState();

  const history = useHistory();

  const qOneOptions = [
    { value: "undefined", label: "Pick an item" },
    { value: "tshirt", label: "T-shirt" },
    { value: "socks", label: "Socks" },
    { value: "bottle", label: "Bottle" },
  ];



  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (
      firstName &&
      lastName &&
      email) 
      {
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

        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status === 200) {
            console.log(response)
            localStorage.setItem("firstName", JSON.stringify(response.message.firstName));
            history.push("/confirmed");
          }
        });
    }
  };

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };
    return (

        <Container>

        <TheForm onSubmit={handleSubmit}>
          <Wrapper>
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(ev) => setFirstName(ev.target.value)}
            />
            <Input
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
              type="checkbox"
              id="noise"
              // onChange={(ev) => setEmail(ev.target.value)}
            />

          <label for="noise"> noise </label>
      

</Wrapper>
        <Button
          type="submit"
          disabled={
            !(
              firstName &&
              lastName &&
              email)
      ? true
      : false
  }
>
  Confirm
</Button>
</TheForm>
</Container>

);
};



const Input = styled.input`
  height: 20px;
  width: 125px;
  margin-left: 10px;
`;

const Input2 = styled(Input)`
  width: 175px;
`;

const Input3 = styled(Input)`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 425px;
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;


const TheForm = styled.form`
  padding-top: 15px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  font-family: var(--font-heading);
  background: var(--color-green);
  height: 30px;
  width: 200px;
  border-radius: 16px;
  align-self: flex-start;
  border: none;
  cursor: pointer;
  color: #000;
  margin-left: 10px;

  &:hover {
    background: var(--color-blue);
    transition: 300ms ease-in-out;
  }

  &:disabled {
    background: #d5fec7;
    cursor: not-allowed;
    transition: none;
  }
`

const Select = styled.select`
`

export default Form