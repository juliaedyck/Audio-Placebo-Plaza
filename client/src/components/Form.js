import styled from "styled-components";
import { useState, useContext  } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const Form = () => {


     //state variables here
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState("");
  const { loggedIn, setLoggedIn, currentUser, setCurrentUser, password, setPassword} = useContext(CurrentUserContext)

  const history = useHistory();




  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      password) 
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
          password: password,

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
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </InfoWrapper>
            <div>
              have you tried any of the following practices? (check all that
              apply)
            </div>
            <OptionsWrapper>
              <Input2 type="checkbox" id="soundscapes" />
              <label for="soundscapes">   <a href="https://en.wikipedia.org/wiki/Soundscape" target="popup" onclick="window.open('../html-link.htm','name','width=600,height=400')">
                soundscapes      </a> </label>
    
              <Input2 type="checkbox" id="nature sounds" />
              <label for="nature sounds"> 
              
              
              <a href="https://en.wikipedia.org/wiki/Soundscape" target="popup" onclick="window.open('https://en.wikipedia.org/wiki/Soundscape,'name','width=600,height=400')">nature sounds</a></label>

              <Input2 type="checkbox" id="isochronic tones" />
              <label for="isochronic tones"> isochronic tones </label>

              <Input2 type="checkbox" id="astral noise" />
              <label for="astral noise"> astral noise </label>

              <Input2 type="checkbox" id="MUZAK" />
              <label for="MUZAK"> MUZAK </label>

              <Input2 type="checkbox" id="deep listening" />
              <label for="deep listening">deep listening</label>

              <Input2 type="checkbox" id="drones" />
              <label for=" drones"> drone </label>

              <Input2 type="checkbox" id="hypnosis" />
              <label for="hypnosis"> hypnosis</label>

              <Input2 type="checkbox" id=" sound baths" />
              <label for="sound baths"> sound baths </label>

              <Input2 type="checkbox" id="neo gregorian chant" />
              <label for="neo gregorian chant "> neo gregorian chant </label>

              <Input2 type="checkbox" id="roleplay " />
              <label for="roleplay"> roleplay </label>

              <Input2 type="checkbox" id="ASMR" />
              <label for="ASMR">ASMR </label>

              <Input2 type="checkbox" id="laughter yoga" />
              <label for="laughter yoga">laughter yoga</label>

              <Input2 type="checkbox" id="binaural beats" />
              <label for="binaural beats">binaural beats</label>

              <Input2 type="checkbox" id="guided meditation" />
              <label for="guided meditation">guided meditation</label>
            </OptionsWrapper>
            <ExperienceWrapper>
              what kind of experience are you seeking?
              <Input2 type="checkbox" id="calming" />
              <label for="calming"> calming </label>
              <Input2 type="checkbox" id="energizing" />
              <label for="energizing"> energizing </label>
              <div>
                Are you seeking an embodied/visceral or cognitage/emotional
                response?
                <Input2 type="checkbox" id="embodied/visceral" />
                <label for="embodied/visceral"> embodied/visceral </label>
                <Input2 type="checkbox" id="cognitage/emotional" />
                <label for="cognitage/emotional"> cognitage/emotional </label>
              </div>
            </ExperienceWrapper>
            <NoiseWrapper>
              what is your favourite color of noise?
              <Input2 type="checkbox" id="white" />
              <label for="white"> white </label>
              <Input2 type="checkbox" id="pink" />
              <label for="pink"> pink </label>
              <Input2 type="checkbox" id="brown" />
              <label for="brown"> brown </label>
            </NoiseWrapper>
            Do you have any sonic allergies or have you ever experienced adverse
            reactions to specific sounds?
            <Input type="text" placeholder="" />
            Do you have a favorite sound?
            <Input type="text" placeholder="" />
          </Wrapper>

          <Button
            type="submit"
            disabled={!( firstName && lastName && email && password) ? true : false}
          >
            Confirm
          </Button>
        </TheForm>
      </Container>
    );
};

const InfoWrapper = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`

const OptionsWrapper = styled.div`
padding: 20px;
display: flex;
align-items: space-evenly`

const NoiseWrapper = styled.div`
padding: 20px;`

const ExperienceWrapper = styled.div`
padding: 20px;`



const Input = styled.input`
  height: 20px;
  width: 125px;
  margin-left: 10px;
`;

const Input2 = styled(Input)`
  width: 175px;
  margin: 10px;
  padding: 5px;
  border-radius: 16px;
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
  padding: 15px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;

`;

const Button = styled.button`
  font-family: var(--font-heading);
  background: #336699;
  height: 30px;
  width: 200px;
  border-radius: 16px;
  align-self: flex-start;
  border: none;
  cursor: pointer;
  color: #000;
  margin-left: 10px;

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

const Select = styled.select`
`

export default Form