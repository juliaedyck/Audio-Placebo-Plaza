import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom"

const Login = () => {

const [loggedIn, setLoggedIn] = useState(false)
const [userName, setUserName] = useState(null)
const history = useHistory()


///just a useless login for now - will try to use Google 

const onSubmitHandler = (e) => {
e.preventDefault();

    // fetch("/api/login", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({userName})})
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data)
    //     setCurrentUser(data.data)
    //     console.log(currentUser)
        console.log("logged in")
        window.sessionStorage.setItem("data", JSON.stringify(userName))
        setLoggedIn(true)
        history.push("/")



    }

return (
    <Wrapper>
    <FormContainer>
    <Form  onSubmit={onSubmitHandler}>
        <Input
        type="text" 
        id="name" 
        placeholder="your first name"
        maxLength={100} 
        onChange={(e) => setUserName(e.target.value) }

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