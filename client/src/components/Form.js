import styled from "styled-components";
import { useState, useContext  } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
// import {isotones} from ".../client/public/isotones";

const Form = () => {


     //state variables here
  // const [firstName, setFirstName] = useState()
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [favSound, setFavSound]= useState("")
  const [noise, setNoise]= useState("")
  const [formData, setFormData] = useState("");
  const [calming, setCalming] = useState();
  const [embodied, setEmbodied]= useState();
  const [voices, setVoices]=useState();
  const [playing, setPlaying] = useState(false)
  const { loggedIn, setLoggedIn, currentUser, setCurrentUser, password, setPassword} = useContext(CurrentUserContext)

  const history = useHistory();
  let audio1 = new Audio("/isotones.mp3")
  let audio2 = new Audio("/VLF+short.mp3")

  
// let audio = isotones

  const start1 = () => {
    audio1.play()
  }

  const start2 = () => {
    audio2.play()
  }

  const playPause1 = () => {

    // Get state of song
    // let isPlaying = this.state.isPlaying;

    if (playing) {
      // Pause the song if it is playing
     audio1.pause();
     setPlaying(false)
     console.log("PAUSE")
    } else {

      // Play the song if it is paused
     audio1.play();
     setPlaying(true)
    }

  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("/fill-form", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _id: currentUser._id,
        noise: noise,
        favSound: favSound


      })}
  )
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
      setCurrentUser(data.data)

     })
  

            if (embodied === true && voices === false) {
            history.push("/confirmed/62a0a11e5173fa8e3f126f03");
            }
            else if (embodied === true && voices === true) {
              history.push("/confirmed/62a0f53e21d84c85e88f4b73");
            }

            else if (voices === true && calming === true)
            {
              history.push("/confirmed/62a0f30921d84c85e88f4b70");
            }  
            else if (voices === true && calming === true && embodied !== true)
            {
              history.push("/confirmed/62a253957c8d6e6823eeabb9");
            } 
            else if (voices !== true && calming !== true && embodied !== true)
            {
              history.push("/confirmed/62a255437c8d6e6823eeabba");
            } else {history.push("/confirmed/62a257047c8d6e6823eeabbb");}
          }


  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };
    return (
      <Container>
        <TheForm onSubmit={handleSubmit}>
          <Wrapper>
            
            <div>
              have you tried any of the following practices? (check all that
              apply)
            </div>
            <OptionsWrapper>
              <Input2 type="checkbox" id="soundscapes" />
              <label for="soundscapes">   <a href="https://en.wikipedia.org/wiki/Soundscape" target="_blank" onclick="window.open('https://en.wikipedia.org/wiki/Soundscape','name','width=600,height=400')">
                soundscapes      </a> </label>
    
              <Input2 type="checkbox" id="nature sounds" />
              <label for="nature sounds"> 
              
              <a href="https://www.youtube.com/watch?v=Jll0yqdQclw" target="popup" onclick="window.open('https://www.youtube.com/watch?v=Jll0yqdQclw,'name','width=600,height=400')">nature sounds</a></label>

              <Input2 type="checkbox" id="isochronic tones" />
              <label for="isochronic tones"><div onClick={playPause1}>isochronic tones</div> </label>
       

              <Input2 type="checkbox" id="astral noise" />
              <label for="astral noise"> <button onClick={start2}>astral noise</button> </label>

              <Input2 type="checkbox" id="MUZAK" />
              <label for="MUZAK">
              <a href="https://en.wikipedia.org/wiki/Muzak" target="popup" onclick="window.open('https://en.wikipedia.org/wiki/Muzak,'name','resizable,width=600,height=400'); return false;">MUZAK</a>
            </label>

              <Input2 type="checkbox" id="deep listening" />
              <label for="deep listening">
              <a href="https://monoskop.org/images/2/2c/Oliveros_Pauline_Deep_Listening_A_Composers_Sound_Practice_2005.pdf" target="popup" onclick="window.open('https://monoskop.org/images/2/2c/Oliveros_Pauline_Deep_Listening_A_Composers_Sound_Practice_2005.pdf,'name','width=600,height=400')"> deep listening</a>
               
              
              </label>

              <Input2 type="checkbox" id="drones" />
              <label for=" drones"> drone </label>

              <Input2 type="checkbox" id="hypnosis" />
              <label for="hypnosis"> 
              
              <a href="https://youngascensionhypnosis.bandcamp.com/track/you-cant-fuck-it-up" target="popup" onclick="window.open('https://youngascensionhypnosis.bandcamp.com/track/you-cant-fuck-it-up')"> hypnosis</a>
              </label>
              

              <Input2 type="checkbox" id=" sound baths" />
              <label for="sound baths">
              <a href="https://www.healthline.com/health/sound-bath" target="popup" onclick="window.open('https://www.healthline.com/health/sound-bath')"> sound baths</a>
             </label>

              <Input2 type="checkbox" id="neo gregorian chant" />
              <label for="neo gregorian chant "> neo gregorian chant </label>

              <Input2 type="checkbox" id="roleplay " />

              <label for="roleplay"> 
              <a href="https://en.wikipedia.org/wiki/Role-playing" target="popup" onclick="window.open('https://en.wikipedia.org/wiki/Role-playing')"> roleplay</a>
              </label>

              <Input2 type="checkbox" id="ASMR" />

              <label for="ASMR">
              <a href="https://www.youtube.com/watch?v=bbPg3Dc68cA" target="popup" onclick="window.open('https://www.youtube.com/watch?v=bbPg3Dc68cA')"> ASMR</a>
              </label>

              <Input2 type="checkbox" id="laughter yoga" />
              <label for="laughter yoga">
              <a href="https://laughteryoga.org/" target="popup" onclick="window.open('https://laughteryoga.org/')"> laughter yoga</a>
                
               </label>

              <Input2 type="checkbox" id="binaural beats" />
              <label for="binaural beats">binaural beats</label>

              <Input2 type="checkbox" id="guided meditation" />
              <label for="guided meditation">
              <a href="https://www.youtube.com/watch?v=eg53RoTeOV4&t=6s" target="popup" onclick="window.open('https://www.youtube.com/watch?v=eg53RoTeOV4&t=6s')"> guided meditation </a>
                
                </label>


            </OptionsWrapper>
            <ExperienceWrapper>
              what kind of experience are you seeking?
              <Input2 type="radio" name= "experience" id="calming" onChange={() => setCalming(true)}/>
              <label for="calming"> calming </label>

              <Input2 type="radio" name= "experience" id="energizing"  onChange={() => setCalming(false)}/>
              <label for="energizing"> energizing </label>

              <div>
                Are you seeking an embodied/visceral or cognitage/emotional
                response?
                <Input2 type="radio" id="embodied/visceral" onChange={() => setEmbodied(true)}/>
                <label for="embodied/visceral"> embodied/visceral </label>
                <Input2 type="radio" id="cognitage/emotional" onChange={() => setEmbodied(false)}/>
                <label for="cognitage/emotional"> cognitage/emotional </label>
              </div>

              <div>
              Would you like one or many voices to directly address you as a listener? 
                <Input2 type="radio" name= "voice" id="voices"  onChange={() => setVoices(true)}/>
                <label for="voices"> Yes </label>
                <Input2 type="radio"  name= "voice" id="no-voice"  onChange={() => setVoices(false)} />
                <label for="no-voice"> No</label>
              </div>

              
            </ExperienceWrapper>


            <NoiseWrapper>
              what is your favourite color of noise?
              <Input2 type="radio" name="color" id="white" onChange={() => setNoise("white")}/>
              <label for="white"> white </label>
              <Input2 type="radio" name="color" id="pink" onChange={() => setNoise("pink")}/>
              <label for="pink"> pink </label>
              <Input2 type="radio" name="color" id="brown" onChange={() => setNoise("brown")} />
              <label for="brown"> brown </label>
            </NoiseWrapper>
            Do you have any sonic allergies or have you ever experienced adverse
            reactions to specific sounds?
            <Input type="text" placeholder="" />
            Do you have a favorite sound?
            <Input type="text" placeholder=""  onChange={(ev) => setFavSound(ev.target.value)}/>
          </Wrapper>

          <Button
            // type="submit"
            // disabled={!( firstName && lastName && email && password) ? true : false}
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
  font-family: var(--font-body);
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