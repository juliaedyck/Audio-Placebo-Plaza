import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import { CurrentUserContext } from "./CurrentUserContext";

const Login = () => {


const { loggedIn, setLoggedIn, currentUser, setCurrentUser, password, setPassword, firstName, setFirstName} = useContext(CurrentUserContext)
const history = useHistory()


///login with email and password
const onSubmitHandler = (e) => {
e.preventDefault();

    fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          password: password,
    })}
    )
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setCurrentUser(data.data)
        console.log(currentUser)
        console.log("logged in")
        window.sessionStorage.setItem("data", JSON.stringify(currentUser))
        setLoggedIn(true)})
        history.push("/Profile")
    }

return (
    <Wrapper>
    <FormContainer>
    <Form  onSubmit={onSubmitHandler}>
        <Input
        type="name" 
        id="name" 
        placeholder="your first name"
        maxLength={100} 
        onChange={(e) => setFirstName(e.target.value) }

        />

<Input
        type="password" 
        id="password" 
        placeholder="your password"
        maxLength={100} 
        onChange={(e) => setPassword(e.target.value) }

        />
    <button>log in</button>
    </Form>
    </FormContainer>
    </Wrapper>
)
}



const Input = styled.input``

const Form = styled.form`
z-index: 2;
display: flex;
flex-direction: column;
`

const FormContainer = styled.div`
z-index: 2;
position: absolute;
left: 40%;
top: 50%;


`

const Wrapper = styled.div`
display:flex;
justify-content: center;
`




export default Login